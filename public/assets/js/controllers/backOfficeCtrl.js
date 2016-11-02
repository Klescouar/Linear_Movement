app.controller('boCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.show = 0;

    var refresh = function() {
        $http.get('/Artiste').success(function(response) {
            console.log("I got the data I requested");
            $scope.infoArtiste = response;
        });
        $http.get('/Home').success(function(response) {
            console.log("I got the data I requested");
            $scope.infoHome = response;
            // $scope.homeId = response[0]._id;
        });
    };

    refresh();

    $scope.addArtist = function() {
        let dataArtist = {
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


    $scope.updateHome = function() {
        let dataHome = {
            bioLinear: document.getElementById("bioLinear").value,
            contact: document.getElementById("contactLinear").value,
            soundcloud: document.getElementById("soundcloudLinear").value,
            bandcamp: document.getElementById("bandcampLinear").value,
            facebook: document.getElementById("facebookLinear").value,
        };
        $http.put('/linear_movement/updateHome', dataHome).success(function(response) {
            refresh();
        })
    };

    $scope.removeArtiste = function(id) {

        console.log(id);
        $http.delete('/linear_movement/remove/artiste/' + id).success(function(response) {
            refresh();
        });
    };

    $scope.editArtiste = function(id) {
        $scope.show = 3;
        console.log(id);
        $http.get('/linear_movement/edit/artiste/' + id).success(function(response) {
            $scope.editArtiste = response;
        });
    };

    $scope.updateArtiste = function(id) {
      let updateArtist = {
          name: document.getElementById("nameUpdate").value,
          bio: document.getElementById("biographyUpdate").value,
          facebook: document.getElementById("facebookUpdate").value,
          discorgs: document.getElementById("discorgsUpdate").value,
          resident: document.getElementById("residentUpdate").value,
          events: [{
              titleEvent1: document.getElementById("titleEvent1Update").value,
              descriptEvent1: document.getElementById("descriptEvent1Update").value
          }, {
              titleEvent2: document.getElementById("titleEvent2Update").value,
              descriptEvent2: document.getElementById("descriptEvent2Update").value
          }, {
              titleEvent3: document.getElementById("titleEvent3Update").value,
              descriptEvent3: document.getElementById("descriptEvent3Update").value
          }, {
              titleEvent4: document.getElementById("titleEvent4Update").value,
              descriptEvent4: document.getElementById("descriptEvent4Update").value
          }, {
              titleEvent5: document.getElementById("titleEvent5Update").value,
              descriptEvent5: document.getElementById("descriptEvent5Update").value
          }, {
              titleEvent6: document.getElementById("titleEvent6Update").value,
              descriptEvent6: document.getElementById("descriptEvent6Update").value
          }]
      };
        console.log(updateArtist);
        $http.put('/linear_movement/update/artiste/' + id, updateArtist).success(function(response) {
            refresh();
        })
    };

}]);﻿
