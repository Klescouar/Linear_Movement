'use strict';

const Router = require('express').Router;
const bodyParser = require('body-parser');

const apiRoutes = new Router();

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const artistController = require('./controllers/artists');
// const userController = require('./controllers/user');
const homeController = require('./controllers/home');
const authController = require('./controllers/auth');

apiRoutes.get('/artist', artistController.find);
apiRoutes.get('/artist/:id', artistController.findOne);
apiRoutes.post('/artist', artistController.add);
apiRoutes.delete('/artist/:id', artistController.deleteArtist);
apiRoutes.put('/artist/:id', artistController.updateArtist);


apiRoutes.post('/users', authController.register);
apiRoutes.post('/login', authController.authenticate);

apiRoutes.get('/home', homeController.find);
apiRoutes.put('/home', homeController.updateHome);

apiRoutes.use('/api', apiRoutes);

module.exports = apiRoutes;