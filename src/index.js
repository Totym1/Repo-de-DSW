'use strict'
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;


mongoose.Promise = global.Promise;

import localidadRoutes from './routes/localidad.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers","Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Allow", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use('/api/localidad', localidadRoutes);

mongoose.connect(process.env.MONGO_DB_CONNECTION)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));
  app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
