import mongoose, { Schema } from "mongoose"

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

export default Product;