var app = angular.module('linear_movement', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })

        .when('/artist/:id_artist', {
            templateUrl: 'views/artistPage.html'
        })
        .when('/backOffice', {
            templateUrl: 'views/backOffice.html'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'userCtrl',
            controllerAs: 'register'
        })
        .when('/login', {
            templateUrl: 'views/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
