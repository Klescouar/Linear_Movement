app.service("dataBackOffice", [ '$http', function($http) {

this.createArtist = (dataArtist) => {
	return $http.post('/api/artist', dataArtist).then((response) => {
        	return response; 	
    }, function(err) {
            return err;
  });
};

this.updateHome = function(infoHome) {
        return $http.put('/api/home', infoHome).then((response) => {
            return response;
        }, function(err) {
            return error;
        });
    };
}]);