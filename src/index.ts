import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import { categoriaRoutes } from './Categoria/categ.routes.js';
import { marcaRoutes } from './Marca/marca.routes.js';
import { indumentariaRoutes } from './Indumentaria/indu.routes.js';
import { localidadRoutes } from './Localidad/local.routes.js';
import { usuarioRoutes } from './Usuario/usu.routes.js';

app.use('/api', categoriaRoutes);
app.use('/api', marcaRoutes);
app.use('/api', indumentariaRoutes);
app.use('/api', localidadRoutes);
app.use('/api', usuarioRoutes);

const conexionMongoDB = process.env.MONGO_DB_CONNECTION;
if (!conexionMongoDB) {
  throw new Error('MONGO_DB_CONNECTION environment variable is not defined');
}
mongoose.connect(conexionMongoDB)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error de conexión:', error));

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
