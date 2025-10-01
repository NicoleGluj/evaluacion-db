import mongoose from "mongoose"

const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI)
    console.log("Conexion exitosa")
  } catch (error) {
    console.log("No se logro la conexion")
  }

}

export default connectDB;