import commands from "../utils/commands"
import connectDB from "../db/connection"
import mongoose, { Schema } from "mongoose"

// CONEXION A DB MONGODB
const URI_DB = "mongodb://localhost:27017/"

// INTERFACE Y SCHEMA DB
interface IProduct {
  name: string,
  descripcion: string,
  precio: number,
  stock: number,
  categoria: string,
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String },
  descripcion: { type: String },
  precio: { type: Number },
  stock: { type: Number },
  categoria: { type: String },
})

const Product = mongoose.model<IProduct>("Product", ProductSchema)

const main = (accion: string) => {
  switch (accion) {
    case "info":
      console.log("-> Comandos validos <-")
      console.table(commands)
      break;

    case "agregarProducto":


      connectDB(URI_DB)
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