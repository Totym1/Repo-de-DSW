import mongoose from "mongoose";

export const conexionMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION || '');
    console.log('Conexión exitosa a MongoDB');
} catch (error) {
    console.error('Error de conexión a MongoDB:', error);
}};
