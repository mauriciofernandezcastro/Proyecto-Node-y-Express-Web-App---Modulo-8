const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ status: 'error', message: 'Token requerido' });
  }

  jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
    if (err) {
      return res.status(403).json({ status: 'error', message: 'Token invalido o expirado' });
    }
    req.user = user;
    next();
  });
}

module.exports = verificarToken;
