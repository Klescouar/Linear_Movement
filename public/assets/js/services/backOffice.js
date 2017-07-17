app.service("dataBackOffice", [ '$http', function($http) {

this.updateHome = function(infoHome) {
        return $http.put('/api/home', infoHome).then((response) => {
            return response;
        }, function(err) {
            return error;
        });
    };
}]);