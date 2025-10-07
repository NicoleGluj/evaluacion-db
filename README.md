CONSIGNA
1. Seleccionar una entidad a trabajar (por ejemplo, usuarios, productos, pedidos, libros, etc.).

2. Definir un esquema en Mongoose para la entidad elegida, incluyendo los campos y tipos de datos que considere necesarios.

3. Implementar las funciones CRUD, que deberán permitir:
  - Crear un nuevo documento en la base de datos.
  - Obtener todos los documentos de la colección.
  - Obtener un documento por su ID.
  - Actualizar un documento existente.
  - Eliminar un documento por su ID.

4. Probar las funciones CRUD con datos de ejemplo.


ENTIDAD SELECCIONADA
- Productos 
  - nombre: String
  - descripción: String
  - precio: Number
  - stock: Number
  - categoría: String

---

**Descripción del proyecto**
Este proyecto es una herramienta de línea de comandos (CLI) para administrar productos en una base de datos MongoDB. Permite agregar, mostrar, buscar, actualizar y eliminar productos de forma sencilla desde la terminal.

**Instrucciones para ejecutar**
1. Clonar el repositorio.
2. Instalar dependencias.
3. Ejecutar "npm run dev" seguido del comando deseado.