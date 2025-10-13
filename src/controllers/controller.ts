import connectDB from "../db/connection"
import Product from "../models/product"
import capitalize from "../utils/capitalize"
import { showCommands } from "../utils/showTable"

// CONEXION A DB MONGODB
const URI_DB = "mongodb://localhost:27017/productosDB"

const main = async (accion: string, argumentos: string[]) => {
  await connectDB(URI_DB)

  // DECLARACION DE VARIABLES

  switch (accion) {
    case "info":
      showCommands()
      break;

    case "agregarProducto":
      const nombre = argumentos[3]
      const color = argumentos[4]
      const precio = argumentos[5]
      const stock = argumentos[6]
      const categoria = argumentos[7]

      // VALIDACIONES
      const pattern = /^[a-zA-Z\s]+$/;

      if (!nombre || !color || !precio || !stock || !categoria) {
        console.log("❌ Debe ingresar todos los datos requeridos: nombre, color, precio, stock y categoria")
        break
      } else if (!pattern.test(nombre) || !pattern.test(color) || !pattern.test(categoria)) {
        console.log("❌ El nombre, color o categoria no deben contener numeros o caracteres especiales")
        break
      } else if (Number(precio) <= 0) {
        console.log("❌ El precio debe ser mayor a cero");
        break;
      } else if (Number(stock) < 0) {
        console.log("❌ El stock debe ser igual o mayor a cero");
        break;
      } else if (isNaN(Number(precio))) {
        console.log("❌ El precio debe ser un número válido");
        break;
      } else if (isNaN(Number(stock))) {
        console.log("❌ El stock debe ser un número válido");
        break;
      }

      // VERIFICAR SI EXISTE
      const existe = await Product.findOne({
        nombre: { $regex: `^${nombre}$`, $options: "i" }
      });

      if (existe) {
        console.log("❌ El producto ya existe en la base de datos")
        break
      }

      const newProduct = new Product(
        {
          nombre: capitalize(nombre.trim()),
          color: capitalize(color.trim()),
          precio: Number(precio),
          stock: Number(stock),
          categoria: capitalize(categoria.trim())
        }
      )
      await newProduct.save()

      console.log("✅ Producto agregado exitosamente")
      break;

    case "mostrarProductos":
      const listaProductos = await Product.find({})
      console.log(listaProductos)
      break;

    case "buscarProducto":
      if (!argumentos[3]) {
        console.log("❌ Debe ingresar el nombre del producto que desea buscar")
        break
      }

      const productoEncontrado = await Product.findOne({
        nombre: new RegExp(`${argumentos[3]}$`, "i")
      })

      if (!productoEncontrado) {
        console.log("❌ No se encontro el producto en la base de datos")
      } else {
        console.log(productoEncontrado)
      }
      break;

    case "actualizarProducto":
      const nombreActualizar = argumentos[3]
      const stockActualizar = argumentos[4]

      // VALIDACION
      if (!nombreActualizar || !stockActualizar) {
        console.log("❌ Debe ingresar los datos requeridos: nombre y stock")
        break
      } else if (Number(stockActualizar) <= 0) {
        console.log("❌ El stock debe ser mayor o igual a 0")
        break
      }

      const productoAActualizar = await Product.findOneAndUpdate(
        { nombre: capitalize(nombreActualizar) },
        { $set: { stock: Number(stockActualizar) } },
        { new: true }
      )

      console.log(productoAActualizar || "❌ No existe el producto a actualizar")
      break;

    case "eliminarProducto":
      const argumentoNombre = argumentos[3]
      const nombreEliminar = capitalize(argumentoNombre)

      if (!nombreEliminar) {
        console.log("❌ Debe ingresar el nombre del producto para eliminarlo de la base de datos")
      }

      const productoAEliminar = await Product.findOne({ nombre: nombreEliminar })

      const eliminarProducto = await Product.findByIdAndDelete(productoAEliminar?._id)

      if (!eliminarProducto) {
        console.log("❌ No se encontro el producto a eliminar en la base de datos")
      } else {
        console.log("✅ Producto borrado exitosamente")
      }
      break;

    default:
      console.log("❌ Comando Invalido")
      break
  }

  process.exit(1)

}

export default main;