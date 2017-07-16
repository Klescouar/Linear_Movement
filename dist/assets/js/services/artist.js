app.service("dataArtist", [ '$http','$routeParams', function($http,$routeParams) {

const id = $routeParams.id_artist;

this.getInfoAllArtist = () => {
	return $http.get('/api/artist').then((response) => {
        		return response;    	
    }, function(err) {
            return err;
  });
}
this.getInfoArtist = (id) => {
	return $http.get('/api/artist' + id).then((response) => {
        		return response;    	
    }, function(err) {
            return err;
  });
}
}]);