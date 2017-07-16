'use strict';

const express = require('express');
const api = require('./api');

const routes = new express.Router();

routes.use('/api', api);

routes.use(express.static('./public/dist'));

module.exports = routes;