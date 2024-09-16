package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import java.util.Optional;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAResourceRepository.class)
public interface ResourceRepository {

    CompletionStage<Resource> add(Resource resource);

    CompletionStage<Stream<Resource>> list();

    CompletionStage<Optional<Resource>> update(Long id, Resource resource);

    CompletionStage<Optional<Resource>> get(Long id);

    void delete(Long id);


}
