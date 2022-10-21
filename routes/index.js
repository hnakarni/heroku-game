const express = require('express');

const HomeController = require('../controllers/HomeController');

const routes = express.Router();

// console.log("first");
routes.get('/', HomeController.home);

routes.post('/insertAdmin', HomeController.insertAdmin);

module.exports = routes;