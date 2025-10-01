

const main = (accion: string) => {
  switch (accion) {
    case "info":
      console.log("Buscando informacion...")
      break;
    case "agregarProducto":
      console.log("Agregando producto...")
      break;
    case "mostrarProductos":
      console.log("Mostrando productos...")
      break;
    case "buscarProducto":
      console.log("Buscando producto...")
      break;
    case "actualizarProducto":
      console.log("Actualizando producto...")
      break;
    case "eliminarProducto":
      console.log("Eliminando producto...")
      break;
  }
}

export default main;