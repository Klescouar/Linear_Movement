app.controller('boCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.show = 0;

    var refresh = function() {
        $http.get('/linear_movement').success(function(response) {
            console.log("I got the data I requested");
            $scope.linear_movement = response;
        });
    };

    refresh();

    $scope.addArticle = function() {
        var dataArticle = {
            title: document.getElementById("title").value,
            corpus: document.getElementById("corpus").value,
        };
        $http.post('/linear_movement', dataArticle).success(function(response) {
            console.log(response);
            refresh();
        });
    };

    $scope.removeArticle = function(id) {

        console.log(id);
        $http.delete('/linear_movement/' + id).success(function(response) {
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
        $http.put('/linear_movement/' + $scope.article._id, dataArticle).success(function(response) {
            refresh();
        })
    };

}]);﻿
