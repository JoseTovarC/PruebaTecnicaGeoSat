package models;

import jakarta.persistence.*;

@Entity
@Table(name = "resource")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_malla", nullable = false)
    public TipoMalla tipoMalla;

    @Column(nullable = false)
    public float ancho;

    @Column(nullable = false)
    public float largo;

    @Column(nullable = true)
    public String descripcion;

    @Column(name = "id_segmento", nullable = false)
    public long idSegmento;

    /*
    @ManyToOne
    @JoinColumn(name = "id_segmento", nullable = false)
    public Segmento segmento;
    
    public Segmento getSegmento() {
        return segmento;
    }

    public void setSegmento(Segmento segmento) {
        this.segmento = segmento;
    }
    */


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
//kindResource
    public TipoMalla getTipoMalla() {
        return tipoMalla;
    }

    public void setTipoMalla(TipoMalla tipoMalla) {
        this.tipoMalla = tipoMalla;
    }

    public float getAncho() {
        return ancho;
    }

    public void setAncho(float ancho) {
        this.ancho = ancho;
    }

    public float getLargo() {
        return largo;
    }

    public void setLargo(float largo) {
        this.largo = largo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public long getIdSegmento() {
        return idSegmento;
    }

    public void setIdSegmento(long idSegmento) {
        this.idSegmento = idSegmento;
    }
}


