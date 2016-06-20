'use strict';
angular.module('utilities', [])
    .service('github', function ($http) {
        var onSuccess = function (response) {
            return response.data;
        };
        var onError = function (reason) {
            return reason.data;
        };
        var gu = function (name) {
            return $http.get('https://api.github.com/users/'+name)
                .success(onSuccess)
                .error(onError);
        };
        return {
            getUserDetails: gu
        };
    });