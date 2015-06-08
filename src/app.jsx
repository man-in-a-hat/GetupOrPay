'use strict';

var Router = require('director').Router;
var LoginPage = require('./pages/login.page');
var SignupPage = require('./pages/signup.page');
var PaymentPage = require('./pages/payment.page');
var AccountPage = require('./pages/account.page');
var DestinationDetailsPage = require('./pages/destinationdetails.page');
var DestinationPage = require('./pages/destination.page');

var routes = {
  '/login': LoginPage,
  '/signup': SignupPage,
  '/payment': PaymentPage,
  '/account': AccountPage,
  '/destination-details': DestinationDetailsPage,
  '/destination': DestinationPage
};

var router = Router(routes);
router.init('/login');