####  [<-- Regresar al README Principal](../README.md)
# Backend - Sistema de Administración de Malla Vial

Este directorio contiene el código del Backend implementado en **Play Framework** utilizando **Java**.

**NOTA:** Entiéndase como *recurso* los siguientes componentes de una Malla Vial:
- *Segmento*
- *Bordillo*
- *Calzada*

## Tecnologías utilizadas

- **Play Framework**: Framework de Java para el desarrollo web.
- **PostgreSQL**: Base de datos relacional.
- **CRUD básico**: El backend permite crear, editar, eliminar y listar recursos de la base de datos.

## Requisitos

- Java 21, se recomienda instalar Temurin, el cual incluye Java 21: https://adoptium.net/es/temurin/releases/
- PostgreSQL 16: https://www.postgresql.org/download/
- Scala sbt 1.10.2 o superior: https://www.scala-sbt.org/download/
- Node.js 20: https://nodejs.org/en/download/prebuilt-installer

## Configuración

### 1. Configuración de la base de datos

1. Instalar PostgreSQL, ejecutarlo y almacenar las credenciales: USERNAME y PASSWORD.

2. Crear una base de datos:
    ```bash
    CREATE DATABASE pruebatecnica;
    ```

3. Configurar las credenciales en el archivo `application.conf`:
    ```conf
    db.default.driver=org.postgresql.Driver
    db.default.url="jdbc:postgresql://localhost:5432/pruebatecnica"
    db.default.username="USERNAME"
    db.default.password="PASSWORD"
    ```

### 2. Ejecución del backend

1. Instalar las dependencias y ejecutar el servidor:
    ```bash
    sbt run
    ```

2. El backend estará disponible en: `http://localhost:9000`.

### 3. Endpoints disponibles

- `GET     /`: Index

- `POST    /resource/add`: Crear un recurso.
- `PUT     /resource/edit/:id`: Editar un recurso existente por su id.
- `GET     /resource/delete/:id`: Eliminar un recurso.
- `GET     /resource/get/:id`: Obtener un recurso existente por su id.
- `GET     /resources`: Obtener todos los recursos existentes.
#### Request de ejemplo para crear y editar un recurso (JSON):
```json
{"tipoMalla":"Calzada", "largo":125, "ancho":70, "descripcion":"Placa huella", "idSegmento":1}
{"tipoMalla": "Bordillo", "ancho": 58.3, "largo": 200.43, "descripcion": "Para cargas pesadas via primaria", "idSegmento": 2}
```

- `POST    /segmento/add`: Crear un recurso.
- `PUT     /segmento/edit/:id`: Editar un recurso existente por su id.
- `GET     /segmento/delete/:id`: Eliminar un recurso.
- `GET     /segmento/get/:id`: Obtener un recurso existente por su id.
- `GET     /segmentos`: Obtener todos los recursos existentes.
#### Request de ejemplo para crear y editar un segmento (JSON):
```json
{"nomenclatura":"Santa Elena", "longitud":200.43}
{"nomenclatura":"vereda el triunfo", "longitud":400}
```


## Autor
Desarrollado por: Jose Orlando Tovar
