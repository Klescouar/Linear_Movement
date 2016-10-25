var app = angular.module('linear_movement', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
