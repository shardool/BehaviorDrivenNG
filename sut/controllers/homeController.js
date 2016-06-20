'use strict';
module.exports = function (app) {
    angular.module(app)
        .controller('homeController', ['$scope', 'github', function (s, github) {
            s.msg = 'Hello World';
            var onSuccess = function (data) {
                s.user = data;
            };
            var onError = function (data) {
                s.error = data;
            };
            s.doStuff = function () {
                s.msg1 = 'hey world';
                github.getUserDetails()
                    .success(onSuccess)
                    .error(onError);
            };
        }]);
};