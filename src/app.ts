import express from 'express';
import cors from 'cors';
import { categoriaRoutes } from './CRUDs/Categoria/categ.routes.js';
import { marcaRoutes } from './CRUDs/Marca/marca.routes.js';
import { indumentariaRoutes } from './CRUDs/Indumentaria/indu.routes.js';
import { direccionRoutes } from './CRUDs/Direccion/direc.routes.js';
import { usuarioRoutes } from './CRUDs/Usuario/usu.routes.js';
import { pedidoRoutes } from './CRUDs/Pedido/pedi.routes.js';
import { envioRoutes } from './CRUDs/Envio/envio.routes.js';
import { pagoRoutes } from './CRUDs/Pago/pago.routes.js';
import { authRoutes } from './auth/auth.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', categoriaRoutes);
app.use('/api', marcaRoutes);
app.use('/api', indumentariaRoutes);
app.use('/api', direccionRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', pedidoRoutes);
app.use('/api', envioRoutes);
app.use('/api', pagoRoutes);
app.use('/api', authRoutes);

export default app;