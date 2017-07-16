app.controller('homeCtrl', ['$scope', '$http', '$sce','dataHome','dataArtist', function($scope, $http, $sce, dataHome, dataArtist) {

dataHome.getInfoHome().then((res) => {
    $scope.infoHome=res.data;
})
dataArtist.getInfoAllArtist().then((res) => {
    $scope.infoArtist=res.data;
    console.log($scope.infoArtist)
})

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    $scope.changeEvent = true;

    $scope.contactMail = function() {
        $scope.contact = !$scope.contact;
    }

    $scope.changeZIndex = function(selector) {
        var index_highest = 0;
        // more effective to have a class for the div you want to search
        $(".img-middle,.video-middle,.info-middle").each(function() {
            // always use a radix when using parseInt
            var index_current = parseInt($(this).css("zIndex"), 10);
            if (index_current > index_highest) {
                index_highest = index_current;
            }
        });
        if (selector === 1) {
            $(".img-middle").css('z-index', index_highest + 1);
        }
        if (selector === 2) {
            $(".video-middle").css('z-index', index_highest + 1);
            $scope.changeEvent = !$scope.changeEvent;
            // $(".iframe-home").css('pointer-events' , 'auto');
        }
        if (selector === 3) {
            $(".info-middle").css('z-index', index_highest + 1);
        }
    }

    $(document).ready(function() {
        $('.draggable')
            .draggable({});
        $('#resize')
            .resizable();
    });
//     var iframe = $('.iframe-home');
// var player = new Vimeo.Player(iframe);

// $scope.playVideo = function() {

// 	$('.player .controls').css('display', 'none!important');
//       //display: none!important;


//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     console.log("player.getPaused()", player.getPaused());

// 	player.getPaused()
// 		.then(function(paused){
// 			playPause(paused);
// 		});

// 	function playPause(paused){

// 		if(paused){
// 			player.play();

// 		} else{
// 		    	console.log('pause it!');
// 		    	player.pause();
// 		 }

// 	}

// }
}]);﻿
