'use strict';
describe('Github service tests', function () {
    beforeEach(angular.mock.module('utilities'));
    it('some shit', angular.mock.inject(function (github, $httpBackend) {
        //$httpBackend.expectGET('https://api.github.com/users/shardool');
        $httpBackend.when('GET', 'https://api.github.com/users/shardool').respond({
            firstName: 'Shardul',
            lastName: 'Ritchie'
        });
        var result = github.getUserDetails('shardool');
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));
    it('some shit', angular.mock.inject(function (github, $httpBackend) {
        //$httpBackend.expectGET('https://api.github.com/users/shardool');
        $httpBackend.when('GET', 'https://api.github.com/users/shardool').respond(200, {
            statusCode:401,
            fn: 'shardul'
        });
        github.getUserDetails('shardool').success(function (response) {
            //console.log(response.fn);
            expect(response.fn).toEqual('shardul');
            console.log(response.statusCode);
        });
        $httpBackend.flush();
    }));
});