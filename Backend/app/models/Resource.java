package models;

import jakarta.persistence.*;

@Entity
@Table(name = "resource")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    public String kindResource;

    public int area;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKindResource() {
        return kindResource;
    }

    public void setKindResource(String kindResource) {
        this.kindResource = kindResource;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }
}
