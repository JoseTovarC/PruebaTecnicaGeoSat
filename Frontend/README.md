
####  [<-- Regresar al README Principal](../README.md)
# Frontend - Sistema de Administración de Malla Vial

Este directorio contiene el código del Frontend implementado en **NextJS** con **ReactJS**.

## Tecnologías utilizadas

- **NextJS**: Framework de React para desarrollo full-stack.

## Requisitos

- Node.js 20: https://nodejs.org/en/download/prebuilt-installer
- **npm** o **yarn** para la gestión de paquetes.

## Instalación

1. Instalar las dependencias del frontend:
    ```bash
    npm install
    ```
    o si utilizas `yarn`:
    ```bash
    yarn install
    ```

2. Configuración del API:
   
   En el archivo `.env.local`, configura la URL del backend:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:9000
    ```

1. Ejecución del frontend
    Para correr la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```

La aplicación estará disponible en http://localhost:3000.

## Funcionalidades implementadas

- Crear un recurso (formulario).
- Editar un recurso existente.
- Eliminar un recurso.
- Ver la lista de recursos.


## Autor
Desarrollado por: Jose Orlando Tovar