package models;

import net.jodah.failsafe.CircuitBreaker;
import net.jodah.failsafe.Failsafe;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import jakarta.persistence.EntityManager;
import java.sql.SQLException;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import java.util.Optional;


import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAResourceRepository implements ResourceRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;
     private final CircuitBreaker<Optional<Resource>> circuitBreaker = new CircuitBreaker<Optional<Resource>>().withFailureThreshold(1).withSuccessThreshold(3);

    @Inject
    public JPAResourceRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    
    public CompletionStage<Resource> add(Resource resource) {
        return supplyAsync(() -> wrap(em -> insert(em, resource)), executionContext);
    }

    
    public CompletionStage<Stream<Resource>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Resource insert(EntityManager em, Resource resource) {
        em.persist(resource);
        return resource;
    }

    
    public CompletionStage<Optional<Resource>> update(Long id, Resource resource) {
        return supplyAsync(() -> wrap(em -> Failsafe.with(circuitBreaker).get(() -> modify(em, id, resource))), executionContext);
    }

    
    public CompletionStage<Optional<Resource>> get(Long id) {
        return supplyAsync(() -> wrap(em -> Failsafe.with(circuitBreaker).get(() -> lookup(em, id))), executionContext);
    }

    
    public void delete(Long id) {
        jpaApi.withTransaction(entityManager -> {
            Resource resource = entityManager.find(Resource.class, id);
            if (resource != null) {
                entityManager.remove(resource);
            }
        });
    }

     private Optional<Resource> modify(EntityManager em, Long id, Resource resource) throws InterruptedException {
        final Resource data = em.find(Resource.class, id);
        if (data != null) {
            data.kindResource = resource.kindResource;
            data.area = resource.area;
        }
        Thread.sleep(10000L);
        return Optional.ofNullable(data);
    }

     private Optional<Resource> lookup(EntityManager em, Long id) throws SQLException {
        //throw new SQLException("Call this to cause the circuit breaker to trip");
        return Optional.ofNullable(em.find(Resource.class, id));
    }

    private Stream<Resource> list(EntityManager em) {
        List<Resource> resources = em.createQuery("select p from Resource p", Resource.class).getResultList();
        return resources.stream();
    }


}
