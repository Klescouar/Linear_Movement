'use strict';
// Router = express.Router
// import {Router} from 'express';
const Router = require('express').Router;
const bodyParser = require('body-parser');

const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const artistController = require('./controllers/artists');
const userController = require('./controllers/user');
const homeController = require('./controllers/home');

apiRoutes.get('/artist', artistController.find);
apiRoutes.post('/artist', artistController.add);
// apiRoutes.put('/artist', artistController.add);

// apiRoutes.get('/user', userController.find);
// apiRoutes.post('/user', userController.add);

apiRoutes.get('/home', homeController.find);
apiRoutes.put('/home', homeController.updateHome);
// apiRoutes.post('/home', homeController.add);

apiRoutes.use('/api', apiRoutes);

//apiRoutes.post('/artists', artistController.create);

module.exports = apiRoutes;