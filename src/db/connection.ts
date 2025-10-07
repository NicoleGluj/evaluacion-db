import mongoose from "mongoose"

const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI)
  } catch (error) {
    console.log("No se logro la conexion")
  }

}

export default connectDB;