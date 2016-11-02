app.controller('artistPageCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	 const id = $routeParams.id_artist;

console.log(id);

	$http.get('/linear_movement/artiste/' + id).success(function(response) {
			$scope.band = response;
			console.log($scope.band);
	});

$(document).ready(function() {

$( '.draggable' )
    	.draggable();
$('#resize')
    	.resizable();

});
}]);﻿
