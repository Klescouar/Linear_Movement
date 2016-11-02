app.controller('homeCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('/Home').success(function(response) {
        console.log("I got the data I requested");
        $scope.infoHome = response;
    });

		$http.get('/Artiste').success(function(response) {
				console.log("I got the data I requested");
				$scope.infoArtiste = response;
				console.log($scope.infoArtiste[0].name);
		});

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    $scope.changeEvent = true;

    $scope.changeZIndex = function(selector) {

        console.log(selector);
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
            console.log(index_highest);
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
}]);﻿
