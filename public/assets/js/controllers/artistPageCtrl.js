app.controller('artistPageCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	 const id = $routeParams.id_artist;

	$http.get('/linear_movement/artiste/' + id).success(function(response) {
			$scope.band = response;
			$scope.events = $scope.band.events;
	});

$(document).ready(function() {

$( '.draggable' )
    	.draggable();
$('#resize')
    	.resizable();


});

    	$scope.backPage = function(){
    		history.back();
    	}
}]);﻿
