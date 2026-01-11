import { conexionMongoDB } from './shared/db.js';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();
conexionMongoDB();

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});