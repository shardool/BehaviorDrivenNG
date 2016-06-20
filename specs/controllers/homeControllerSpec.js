'use strict';
describe('My App test cases', function () {
    var controllerFactory, scope, mockMsg, server;
    beforeEach(angular.mock.module('main'));
    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        controllerFactory = $controller;
        scope = $rootScope.$new();
        mockMsg = sinon.stub({
            getEvents: function () {
            }
        });
        server = sinon.fakeServer.create();
    }));
    beforeEach(function () {
    });
    it('test - 1', function () {
        controllerFactory('homeController', {$scope: scope});
        expect(scope.msg).toEqual('Hello World');
    });
    it('test - 2', function () {
        controllerFactory('homeController', {$scope: scope});
        scope.doStuff();
        expect(scope.msg1).toEqual('hey world');
    });
    it('test - 3', function () {
       /* controllerFactory('homeController', {$scope: scope, github: mockgitHub});*/
        server.respondWith([200, {
            'content-type': 'application/json'
        }, '{"author":"Douglas Crockford"}']);
    });
});