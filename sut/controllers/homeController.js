'use strict';
module.exports = function (app) {
    angular.module(app)
        .controller('homeController', ['$scope', function (s) {
            s.msg = 'Hello World';
            s.doStuff = function(){
                s.msg1 = 'hey world';
            };
        }]);
};