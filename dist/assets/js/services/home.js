app.service("dataHome", [ '$http', function($http) {

this.getInfoHome = () => {
	return $http.get('/api/home').then((response) => {
        	return response;    	
    }, function(err) {
            return error;
  });
}

}]);