# Proyecto Backend - API para Gestión de Secciones y Marcas de ropa

Este proyecto es una API backend construida con **Node.js**, **Express** y **MongoDB**, que permite gestionar **secciones** y **marcas** de ropa. Las secciones contienen múltiples marcas, las cuales están organizadas por categorías y precio.

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

## Endpoints

### **Secciones**

- **GET /api/v1/secciones**: Obtiene todas las secciones.
- **GET /api/v1/secciones/:id**: Obtiene una sección por su ID.
- **POST /api/v1/secciones**: Crea una nueva sección.
- **PUT /api/v1/secciones/:id**: Actualiza una sección existente.
- **DELETE /api/v1/secciones/:id**: Elimina una sección por su ID.

### **Marcas**

- **GET /api/v1/marcas**: Obtiene todas las marcas.
- **GET /api/v1/marcas/:id**: Obtiene una marca por su ID.
- **GET /api/v1/marcas/categoria/:categoria**: Obtiene marcas filtradas por categoría.
- **GET /api/v1/marcas/precio/:precio**: Obtiene marcas cuyo precio sea menor o igual al especificado.
- **POST /api/v1/marcas**: Crea una nueva marca.
- **PUT /api/v1/marcas/:id**: Actualiza una marca existente.
- **DELETE /api/v1/marcas/:id**: Elimina una marca por su ID.

## Estructura de Datos

### **Sección**

```json
{
  "nombre": "Nombre de la Sección", //(ejemplo:"MUJERES","HOMBRES","NIÑOS')
  "imagen": "url_imagen",
  "marcas": ["id_marca1", "id_marca2"] //NO PERMITE DUPLICADOS
}
```

### **Marca**

```json
{
  "nombre": "Nombre de la Marca",
  "imagen": "url_imagen",
  "precio": 100,
  "categoria": "deportes"
}
```
