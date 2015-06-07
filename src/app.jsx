'use strict';

var LoginPage = require('./pages/login.page.jsx');
var SignupPage = require('./pages/signup.page.jsx');

var routes = {
  '/login': LoginPage,
  '/signup': SignupPage
};

var router = Router(routes);
router.init('/login');