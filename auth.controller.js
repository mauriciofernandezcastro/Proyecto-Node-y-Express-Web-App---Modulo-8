const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario || usuario.password!== password) {
    return res.status(401).json({ status: 'error', message: 'Credenciales invalidas' });
  }

  const payload = { id: usuario.id, email: usuario.email };
  const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '1h' });

  res.json({ status: 'ok', message: 'Login correcto', data: { token } });
};

exports.register = async (req, res) => {
  try {
    const nuevo = await Usuario.create(req.body);
    res.status(201).json({ status: 'ok', data: nuevo });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};
