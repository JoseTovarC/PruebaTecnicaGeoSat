package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import java.util.Optional;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPASegmentoRepository.class)
public interface SegmentoRepository {

    CompletionStage<Segmento> add(Segmento segmento);

    CompletionStage<Stream<Segmento>> list();

    CompletionStage<Optional<Segmento>> update(Long id, Segmento segmento);

    CompletionStage<Optional<Segmento>> get(Long id);

    void delete(Long id);


}
