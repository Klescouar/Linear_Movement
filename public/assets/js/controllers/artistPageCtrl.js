app.controller('artistPageCtrl', ['$scope', '$http', '$routeParams', 'dataArtist',function($scope, $http, $routeParams,dataArtist) {



dataArtist.getInfoArtist(id).then((res) => {
    $scope.band=res.data;
    $scope.events = $scope.band.events;
    
})

	// $http.get('/linear_movement/artiste/' + id).success(function(response) {
	// 		$scope.band = response;
	// 		$scope.events = $scope.band.events;
	// });

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
