'uses strict';
require('angular');
require('./services/github.js');
angular.module('main', ['utilities']);
require('./controllers/homeController.js')('main');