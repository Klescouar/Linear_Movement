app.controller('boCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.show = 0;

    const refresh = () => {
        $http.get('/Artiste').success(function(response) {
            console.log("I got the data I requested");
            $scope.infoArtiste = response;
        });
        $http.get('/Home').success(function(response) {
            console.log("I got the data I requested");
            $scope.infoHome = response;
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
            soundcloud: document.getElementById("soundcloud").value,
            photo: document.getElementById("photo").value,
            events: [{
                dateEvent: document.getElementById("dateEvent1").value,
                descriptEvent: document.getElementById("descriptEvent1").value,
                spotEvent: document.getElementById("spotEvent1").value,
            }, {
                dateEvent: document.getElementById("dateEvent2").value,
                descriptEvent: document.getElementById("descriptEvent2").value,
                spotEvent: document.getElementById("spotEvent2").value,
            }, {
                dateEvent: document.getElementById("dateEvent3").value,
                descriptEvent: document.getElementById("descriptEvent3").value,
                spotEvent: document.getElementById("spotEvent3").value,
            }, {
                dateEvent: document.getElementById("dateEvent4").value,
                descriptEvent: document.getElementById("descriptEvent4").value,
                spotEvent: document.getElementById("spotEvent4").value,
            }, {
                dateEvent: document.getElementById("dateEvent5").value,
                descriptEvent: document.getElementById("descriptEvent5").value,
                spotEvent: document.getElementById("spotEvent5").value,
            }, {
                dateEvent: document.getElementById("dateEvent6").value,
                descriptEvent: document.getElementById("descriptEvent6").value,
                spotEvent: document.getElementById("spotEvent6").value,
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
            video: document.getElementById("videoLinear").value,
            background: document.getElementById("backgroundLinear").value,
            EP: document.getElementById("imageEpLinear").value,
        };
        $http.put('/linear_movement/updateHome', dataHome).success(function(response) {
            refresh();
        })
    };

    $scope.removeArtiste = function(id) {
        const response = confirm("Voulez vous vraiment supprimer cet artiste?");
        if (response === true) {
            console.log(id);
            $http.delete('/linear_movement/remove/artiste/' + id).success(function(response) {
                refresh();
            });
            alert("Artiste supprimé!");
        }
    };

    $scope.showInfoArtiste = function(id) {
        $scope.show = 3;
        console.log(id);
        $http.get('/linear_movement/artiste/' + id).success(function(response) {
            $scope.editArtiste = response;
            console.log($scope.editArtiste);
        });
    };

    $scope.updateArtiste = function(id) {
        const response = confirm("Voulez vous vraiment modifier cet artiste?");
        if (response === true) {
            let updateArtist = {
                name: document.getElementById("nameUpdate").value,
                bio: document.getElementById("biographyUpdate").value,
                facebook: document.getElementById("facebookUpdate").value,
                discorgs: document.getElementById("discorgsUpdate").value,
                resident: document.getElementById("residentUpdate").value,
                soundcloud: document.getElementById("soundcloudUpdate").value,
                photo: document.getElementById("photoUpdate").value,
                events: [{
                    dateEvent1: document.getElementById("dateEvent1Update").value,
                    descriptEvent1: document.getElementById("descriptEvent1Update").value,
                    spotEvent1: document.getElementById("spotEvent1Update").value,
                }, {
                    dateEvent2: document.getElementById("dateEvent2Update").value,
                    descriptEvent2: document.getElementById("descriptEvent2Update").value,
                    spotEvent2: document.getElementById("spotEvent2Update").value,
                }, {
                    dateEvent3: document.getElementById("dateEvent3Update").value,
                    descriptEvent3: document.getElementById("descriptEvent3Update").value,
                    spotEvent3: document.getElementById("spotEvent3Update").value,
                }, {
                    dateEvent4: document.getElementById("dateEvent4Update").value,
                    descriptEvent4: document.getElementById("descriptEvent4Update").value,
                    spotEvent4: document.getElementById("spotEvent4Update").value,
                }, {
                    dateEvent5: document.getElementById("dateEvent5Update").value,
                    descriptEvent5: document.getElementById("descriptEvent5Update").value,
                    spotEvent5: document.getElementById("spotEvent5Update").value,
                }, {
                    dateEvent6: document.getElementById("dateEvent6Update").value,
                    descriptEvent6: document.getElementById("descriptEvent6Update").value,
                    spotEvent6: document.getElementById("spotEvent6Update").value,
                }]
            };
            console.log(updateArtist);
            $http.put('/linear_movement/update/artiste/' + id, updateArtist).success(function(response) {
                refresh();
            })
            alert("Artiste modifié!")
        };
    }
}]);﻿
