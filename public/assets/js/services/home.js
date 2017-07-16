app.service("dataHome", [ '$http', function($http) {

this.getInfoHome = () => {
	return $http.get('/api/home').then((response) => {
        	return response;    	
    }, function(err) {
            return error;
  });
}

    // $http.get('/Artiste').success(function(response) {
    //     console.log("I got the data I requested");
    //     $scope.infoArtiste = response;
    // });

}]);