app.controller('boCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.show = 0;

    var refresh = function() {
        $http.get('/linear_movement').success(function(response) {
            console.log("I got the data I requested");
            $scope.linear_movement = response;
        });
    };

    refresh();

    $scope.addArtist = function() {
        var dataArtist = {
            name: document.getElementById("name").value,
            bio: document.getElementById("biography").value,
            facebook: document.getElementById("facebook").value,
            discorgs: document.getElementById("discorgs").value,
            resident: document.getElementById("resident").value,
            events: [{
                titleEvent1: document.getElementById("titleEvent1").value,
                descriptEvent1: document.getElementById("descriptEvent1").value
            }, {
                titleEvent2: document.getElementById("titleEvent2").value,
                descriptEvent2: document.getElementById("descriptEvent2").value
            }, {
                titleEvent3: document.getElementById("titleEvent3").value,
                descriptEvent3: document.getElementById("descriptEvent3").value
            }, {
                titleEvent4: document.getElementById("titleEvent4").value,
                descriptEvent4: document.getElementById("descriptEvent4").value
            }, {
                titleEvent5: document.getElementById("titleEvent5").value,
                descriptEvent5: document.getElementById("descriptEvent5").value
            }, {
                titleEvent6: document.getElementById("titleEvent6").value,
                descriptEvent6: document.getElementById("descriptEvent6").value
            }]
        };
        $http.post('/linear_movement/addArtist', dataArtist).success(function(response) {
            console.log(response);
            refresh();
        });
    };
    $scope.removeArticle = function(id) {

        console.log(id);
        $http.delete('/linear_movement/remove/' + id).success(function(response) {
            refresh();
        });
    };

    $scope.editArticle = function(id) {
        $scope.show = 2;
        console.log(id);
        $http.get('/linear_movement/' + id).success(function(response) {
            $scope.article = response;
            console.log($scope.article);
        });
    };

    $scope.updateArticle = function() {
        var dataArticle = {
            title: document.getElementById("title").value,
            corpus: document.getElementById("corpus").value,
        };
        console.log($scope.article._id);
        $http.put('/linear_movement/update/' + $scope.article._id, dataArticle).success(function(response) {
            refresh();
        })
    };

}]);﻿
