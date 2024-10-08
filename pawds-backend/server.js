const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importamos el archivo de rutas
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Conexión a MongoDB
mongoose.connect('mongodb://localhost/pawds')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Usamos las rutas y agregamos el prefijo /api
app.use('/api', routes);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
