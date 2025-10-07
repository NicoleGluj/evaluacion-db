const commands = [
  { Comando: "info", Descripcion: "Informacion de los comandos disponibles.", Parametros: "" },
  { Comando: "agregarProducto", Descripcion: "Agrega un nuevo producto a la base de datos.", Parametros: ["nombre", "color", "precio", "stock", "categoria"] },
  { Comando: "mostrarProductos", Descripcion: "Muestra todos los productos cargados en la base de datos.", Parametros: "" },
  { Comando: "buscarProducto", Descripcion: "Busca un producto existente en la base de datos.", Parametros: ["nombre del producto"] },
  { Comando: "actualizarProducto", Descripcion: "Actualiza el stock de un producto existente en la base de datos.", Parametros: ["nombre del producto", "nuevo valor de stock"] },
  { Comando: "eliminarProducto", Descripcion: "Elimina un producto existente en la base de datos.", Parametros: ["nombre del producto"] }
]

export default commands