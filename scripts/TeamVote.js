var teamVote = angular.module('TeamVote', ['ngRoute']);

// configure our routes
teamVote.config(function ($routeProvider) {
    $routeProvider
		.when('/', {
            templateUrl: 'Intro.html',
            controller: 'intro'
        })
        .when('/history', {
            templateUrl: 'History.html',
            controller: 'history'
        })
});

teamVote.controller('mainPage', function ($scope) {
    $scope.welcome = "Hello";
});

teamVote.controller('intro', function ($scope) {
    
});

teamVote.controller('history', function ($scope) {
    $scope.welcome = "Old Stuff Here...";
});