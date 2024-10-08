const express = require('express');
const router = express.Router();
const User = require('./models'); // Asegúrate de que el archivo de modelos se llame models.js

// Ruta para registro
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ success: true, message: "Usuario registrado" });
  } catch (error) {
    res.status(400).send({ success: false, message: "Error registrando el usuario", error });
  }
});

// Ruta para login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  
  if (!user) {
    return res.status(401).send({ success: false, message: "Credenciales inválidas" });
  }

  res.send({ success: true, message: "Inicio de sesión exitoso", user });
});

// Ruta para logout
router.post('/logout', (req, res) => {
  // Aquí podrías eliminar el token o la sesión del usuario si usas autenticación basada en tokens
  res.send({ message: "Sesión cerrada exitosamente" });
});

module.exports = router;

