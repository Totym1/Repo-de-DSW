/*import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import localidadRoutes from './routes/localidad.js';
import marcaRoutes from './routes/marca.js';
import categoriaRoutes from './routes/categoria.js';

app.use('/api/localidad', localidadRoutes);
app.use('/api/marca', marcaRoutes);
app.use('/api/categoria', categoriaRoutes);

mongoose.connect(process.env.MONGO_DB_CONNECTION)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));
  app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});*/
