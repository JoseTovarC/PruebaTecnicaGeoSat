package controllers;

import models.Resource;
import models.ResourceRepository;
import models.Segmento;
import models.SegmentoRepository;
import play.libs.concurrent.ClassLoaderExecutionContext;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;
import java.util.Optional;

import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode;
import java.security.PermissionCollection;

import jakarta.persistence.EntityNotFoundException;



/**
 * The controller keeps all database operations behind the repository, and uses
 * {@link play.libs.concurrent.ClassLoaderExecutionContext} to provide access to the
 * {@link play.mvc.Http.Context} methods like {@code request()} and {@code flash()}.
 */
public class ResourceController extends Controller {

    
    private final ResourceRepository resourceRepository;
    private final SegmentoRepository segmentoRepository;
    private final ClassLoaderExecutionContext ec;

    @Inject
    public ResourceController(ResourceRepository resourceRepository, SegmentoRepository segmentoRepository, ClassLoaderExecutionContext ec) {
        
        this.resourceRepository = resourceRepository;
        this.segmentoRepository = segmentoRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addResource(Http.Request request) {
        
        Optional<Resource> resource = request.body().parseJson(Resource.class);
        return resource.map(p -> resourceRepository.add(p).thenApplyAsync(resourceComple ->
         ok(Json.toJson(resourceComple)), ec.current())
        ).orElse(CompletableFuture.completedFuture(badRequest("Expecting Json data")));
   

    }

    public CompletionStage<Result> updateResource(Http.Request request, String id) {
        
        Optional<Resource> resource = request.body().parseJson(Resource.class);
        return resource.map(p -> 
        resourceRepository.update(Long.parseLong(id), p).thenApplyAsync(optionalResource -> 
        optionalResource.map(r -> ok(Json.toJson(r)))
        .orElse(badRequest("Expecting Json data"))
         , ec.current())


        ).orElse(CompletableFuture.completedFuture(badRequest("Expecting Json data")));

    }

    public CompletionStage<Result> getResource(String id) {
        
        return resourceRepository.get(Long.parseLong(id)).thenApplyAsync(optionalResource -> 
        optionalResource.map(r -> ok(Json.toJson(r)))
        .orElse(badRequest("Expecting Json data")), ec.current());

    }

    public CompletionStage<Result> getResources() {
        return resourceRepository
                .list()
                .thenApplyAsync(resourceStream -> ok(Json.toJson(resourceStream.collect(Collectors.toList()))), ec.current());
    }

    public Result deleteResource(String id) {
        try {
            resourceRepository.delete(Long.parseLong(id));
            return ok("Resource deleted successfully");
        } catch (EntityNotFoundException e) {
            return notFound(e.getMessage());
        }catch (Exception e) {
            return badRequest("Id incorrect");
        }
    }

//
//
//  Apartir de aqui se controla el modelo de segmento
//
//
     public CompletionStage<Result> addSegmento(Http.Request request) {
        
        Optional<Segmento> segmento = request.body().parseJson(Segmento.class);
        return segmento.map(p -> segmentoRepository.add(p).thenApplyAsync(segmentoComple ->
         ok(Json.toJson(segmentoComple)), ec.current())
        ).orElse(CompletableFuture.completedFuture(badRequest("Expecting Json data")));
   

    }

    public CompletionStage<Result> updateSegmento(Http.Request request, String id) {
        
        Optional<Segmento> segmento = request.body().parseJson(Segmento.class);
        return segmento.map(p -> 
        segmentoRepository.update(Long.parseLong(id), p).thenApplyAsync(optionalSegmento -> 
        optionalSegmento.map(r -> ok(Json.toJson(r)))
        .orElse(badRequest("Expecting Json data"))
         , ec.current())


        ).orElse(CompletableFuture.completedFuture(badRequest("Expecting Json data")));

    }

    public CompletionStage<Result> getSegmento(String id) {
        
        return segmentoRepository.get(Long.parseLong(id)).thenApplyAsync(optionalSegmento -> 
        optionalSegmento.map(r -> ok(Json.toJson(r)))
        .orElse(badRequest("Expecting Json data")), ec.current());

    }

    public CompletionStage<Result> getSegmentos() {
        return segmentoRepository
                .list()
                .thenApplyAsync(segmentoStream -> ok(Json.toJson(segmentoStream.collect(Collectors.toList()))), ec.current());
    }

    public Result deleteSegmento(String id) {
        try {
            segmentoRepository.delete(Long.parseLong(id));
            return ok("Segmento deleted successfully");
        } catch (EntityNotFoundException e) {
            return notFound(e.getMessage());
        }catch (Exception e) {
            return badRequest("Id incorrect");
        }
    }



}
