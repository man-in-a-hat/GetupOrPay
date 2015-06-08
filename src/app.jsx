'use strict';

var Router = require('director').Router;
var LoginPage = require('./pages/login.page');
var SignupPage = require('./pages/signup.page');
var PaymentPage = require('./pages/payment.page');

var routes = {
  '/login': LoginPage,
  '/signup': SignupPage,
  '/payment': PaymentPage
};

var router = Router(routes);
router.init('/login');