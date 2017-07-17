app.service("dataArtist", [ '$http','$routeParams', function($http,$routeParams) {

this.getInfoAllArtist = () => {
	return $http.get('/api/artist').then((response) => {
        		return response;    	
    }, (err) => {
            return err;
  });
};
this.createArtist = (datasArtist) => {
  return $http.post('/api/artist', datasArtist).then((response) => {
          return response;  
    }, (err) => {
            return err;
  });
};
this.getInfoArtist = (id) => {
	return $http.get('/api/artist/' + id).then((response) => {
        		return response;    	
    }, (err) => {
            return err;
  });
};
this.deleteArtist = (id) => {
  return $http.delete('/api/artist/' + id).then((response) => {
            return response;      
    }, (err) => {
            return err;
  });
};
this.updateArtist = (id, datasArtist) => {
        return $http.put('/api/artist/' + id, datasArtist).then((response) => {
            return response;
        }, function(err) {
            return error;
        });
    };
}]);