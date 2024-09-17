package models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "segmento")
public class Segmento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    @Column(nullable = false, unique = true)
    public String nomenclatura;

    @Column(nullable = false)
    public float longitud;
/*
    @OneToMany(mappedBy = "segmento", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Resource> resources;
    
    public List<Resource> getResources() {
        return resources;
    }

    public void setResources(List<Resource> resources) {
        this.resources = resources;
    }
    
    */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getNomenclatura() {
        return nomenclatura;
    }

    public void setNomenclatura(String nomenclatura) {
        this.nomenclatura = nomenclatura;
    }

    public float getLongitud() {
        return longitud;
    }

    public void setLongitud(float longitud) {
        this.longitud = longitud;
    }



}
