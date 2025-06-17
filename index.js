import mongoose from 'mongoose';
import express from 'express';
const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGO_DB_CONNECTION)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
