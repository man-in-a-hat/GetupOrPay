'use strict';

var routes = {
  '/login': Login,
  '/signup': Signup
};

var router = Router(routes);
router.init('/login');