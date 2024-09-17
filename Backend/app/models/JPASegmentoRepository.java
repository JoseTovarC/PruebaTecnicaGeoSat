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
public class JPASegmentoRepository implements SegmentoRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;
     private final CircuitBreaker<Optional<Segmento>> circuitBreaker = new CircuitBreaker<Optional<Segmento>>().withFailureThreshold(1).withSuccessThreshold(3);

    @Inject
    public JPASegmentoRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    
    public CompletionStage<Segmento> add(Segmento segmento) {
        return supplyAsync(() -> wrap(em -> insert(em, segmento)), executionContext);
    }

    
    public CompletionStage<Stream<Segmento>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Segmento insert(EntityManager em, Segmento segmento) {
        em.persist(segmento);
        return segmento;
    }

    
    public CompletionStage<Optional<Segmento>> update(Long id, Segmento segmento) {
        return supplyAsync(() -> wrap(em -> Failsafe.with(circuitBreaker).get(() -> modify(em, id, segmento))), executionContext);
    }

    
    public CompletionStage<Optional<Segmento>> get(Long id) {
        return supplyAsync(() -> wrap(em -> Failsafe.with(circuitBreaker).get(() -> lookup(em, id))), executionContext);
    }

    
    public void delete(Long id) {
        jpaApi.withTransaction(entityManager -> {
            Segmento segmento = entityManager.find(Segmento.class, id);
            if (segmento != null) {
                entityManager.remove(segmento);
            }
        });
    }

     private Optional<Segmento> modify(EntityManager em, Long id, Segmento segmento) throws InterruptedException {
        final Segmento data = em.find(Segmento.class, id);
        if (data != null) {
            data.nomenclatura = segmento.nomenclatura;
            data.longitud = segmento.longitud;    

        }
        Thread.sleep(10000L);
        return Optional.ofNullable(data);
    }

     private Optional<Segmento> lookup(EntityManager em, Long id) throws SQLException {
        //throw new SQLException("Call this to cause the circuit breaker to trip");
        return Optional.ofNullable(em.find(Segmento.class, id));
    }

    private Stream<Segmento> list(EntityManager em) {
        List<Segmento> segmentos = em.createQuery("select p from Segmento p", Segmento.class).getResultList();
        return segmentos.stream();
    }


}
