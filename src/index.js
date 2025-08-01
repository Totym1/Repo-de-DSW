'use strict'
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_DB_CONNECTION)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));
  app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});

