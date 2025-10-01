import commands from "../utils/commands"
import connectDB from "../db/connection"
import mongoose, { Schema } from "mongoose"

// CONEXION A DB MONGODB
const URI_DB = "mongodb://localhost:27017/productosDB"

// INTERFACE Y SCHEMA DB
interface IProduct {
  nombre: string,
  color: string,
  precio: number,
  stock: number,
  categoria: string,
}

const ProductSchema = new Schema<IProduct>({
  nombre: { type: String },
  color: { type: String },
  precio: { type: Number },
  stock: { type: Number },
  categoria: { type: String },
})

const Product = mongoose.model<IProduct>("Product", ProductSchema)


const main = async (accion: string, argumentos: string[]) => {
  await connectDB(URI_DB)

  switch (accion) {
    case "info":
      console.log("-> Comandos validos <-")
      console.table(commands)
      break;

    case "agregarProducto":
      const nombre = argumentos[3]
      const color = argumentos[4]
      const precio = argumentos[5]
      const stock = argumentos[6]
      const categoria = argumentos[7]

      // VALIDACIONES


      const newProduct = new Product(
        {
          nombre,
          color,
          precio: Number(precio),
          stock: Number(stock),
          categoria
        }
      )
      await newProduct.save()

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