####  [<-- Regresar al README Principal](../README.md)
# Backend - Sistema de Administración de Malla Vial

Este directorio contiene el código del Backend implementado en **Play Framework** utilizando **Java**.

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

- `POST /recursos`: Crear un recurso.
- `GET /recursos`: Listar todos los recursos.
- `PUT /recursos/:id`: Editar un recurso existente.
- `DELETE /recursos/:id`: Eliminar un recurso.

## Autor
Desarrollado por: Jose Orlando Tovar
