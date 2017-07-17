app.controller('artistPageCtrl', ['$scope', '$http', '$routeParams', 'dataArtist',function($scope, $http, $routeParams,dataArtist) {
const id = $routeParams.id_artist;
dataArtist.getInfoArtist(id).then((res) => {
    console.log(res)
    $scope.band=res.data;
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
