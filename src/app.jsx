'use strict';

var Router = require('director').Router;
var LoginPage = require('./pages/login.page');
var SignupPage = require('./pages/signup.page');

var routes = {
  '/login': LoginPage,
  '/signup': SignupPage
};

var router = Router(routes);
router.init('/login');