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
      }

      // VERIFICAR SI EXISTE Y PONER EN MAYUS CAMPOS

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

      console.log("Producto agregado exitosamente")
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