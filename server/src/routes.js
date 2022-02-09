const express = require('express');
const routes = express.Router();

const Personalidade = require('./Controllers/Personalidade');

routes.post('/res', Personalidade.index);

module.exports = routes;