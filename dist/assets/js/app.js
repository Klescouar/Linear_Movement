var app = angular.module('linear_movement', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/artist:id_artist', {
            templateUrl: 'views/artistPage.html'
        })
        .when('/backOffice', {
            templateUrl: 'views/backOffice.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
