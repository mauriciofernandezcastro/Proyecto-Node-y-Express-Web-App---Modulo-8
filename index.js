const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./src/config/database');
const authRoutes = require('./src/routes/auth.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');
const productoRoutes = require('./src/routes/productos.routes');
const uploadRoutes = require('./src/routes/upload.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('src/uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api', uploadRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Modulo 8 funcionando' });
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
});
