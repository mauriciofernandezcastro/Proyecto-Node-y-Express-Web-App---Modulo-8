const Usuario = require('../models/usuario');

exports.getAll = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json({ status: 'ok', data: usuarios });
};

exports.getOne = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: usuario });
};

exports.update = async (req, res) => {
  await Usuario.update(req.body, { where: { id: req.params.id } });
  res.json({ status: 'ok', message: 'Actualizado' });
};

exports.delete = async (req, res) => {
  await Usuario.destroy({ where: { id: req.params.id } });
  res.json({ status: 'ok', message: 'Eliminado' });
};

exports.perfil = async (req, res) => {
  const usuario = await Usuario.findByPk(req.user.id);
  res.json({ status: 'ok', message: 'Acceso autorizado', data: usuario });
};
