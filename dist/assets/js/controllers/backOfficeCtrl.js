app.controller('boCtrl', ['$scope', '$http','dataBackOffice','inputAnim','dataHome', function($scope, $http,dataBackOffice,inputAnim,dataHome) {
    $scope.artist=true;
    $scope.show = 0;
    
/////////////////GET INFOS HOME//////////////////
dataHome.getInfoHome().then((res) => {
   $scope.infoHome=res.data;

})
    // const refresh = () => {
    //     $http.get('/Artiste').success(function(response) {
    //         console.log("I got the data I requested");
    //         $scope.infoArtiste = response;
    //     });
    //     $http.get('/Home').success(function(response) {
    //         console.log("I got the data I requested");
    //         $scope.infoHome = response;
    //     });
    // };

    // refresh();

///////////////////CREATE NEW ARTIST//////////////////
    $scope.addArtist = function() {
        $scope.artist=true;
        let dataArtist = {
            name: $scope.name,
            bio: $scope.biography,
            facebook: $scope.facebook,
            discorgs: $scope.discorgs,
            resident: $scope.resident,
            soundcloud: $scope.soundcloud,
            photo: $scope.photo,
            events: [{
                dateEvent: $scope.dateEvent1,
                descriptEvent: $scope.descriptEvent1,
                spotEvent: $scope.spotEvent1,
            }, {
                dateEvent: $scope.dateEvent2,
                descriptEvent: $scope.descriptEvent2,
                spotEvent: $scope.spotEvent2,
            }, {
                dateEvent: $scope.dateEvent3,
                descriptEvent: $scope.descriptEvent3,
                spotEvent: $scope.spotEvent3,
            }, {
                dateEvent: $scope.dateEvent4,
                descriptEvent: $scope.descriptEvent4,
                spotEvent: $scope.spotEvent4,
            }, {
                dateEvent: $scope.dateEvent5,
                descriptEvent: $scope.descriptEvent5,
                spotEvent: $scope.spotEvent5,
            }, {
                dateEvent: $scope.dateEvent6,
                descriptEvent: $scope.descriptEvent6,
                spotEvent: $scope.spotEvent6,
            }]
        };
        dataBackOffice.createArtist(dataArtist).then((res) => {
            console.log(dataArtist)
            console.log(res)
            if (res.data.errmsg === undefined) {
                inputAnim.lunchAnim();
            }else{
                $scope.artist= false;
                console.log($scope.artist)
            }
            // refresh();
        })
    };


///////////////////UPDATE INFOS HOME//////////////////
    $scope.updateHome = () => {
        $scope.artist=true;
        const infoHome = {
            bioLinear: $scope.infoHome[0].bioLinear,
            contact: $scope.infoHome[0].contact,
            booking: $scope.infoHome[0].booking,
            video: $scope.infoHome[0].video,
            soundcloud: $scope.infoHome[0].soundcloud,
            facebook: $scope.infoHome[0].facebook,
            background: $scope.infoHome[0].background,
            bandcamp: $scope.infoHome[0].bandcamp,
            EP: $scope.infoHome[0].EP
        };
        if (confirm("Êtes vous sur de vouloir modifier ?")) {
        dataBackOffice.updateHome(infoHome).then((res) => {
            if (res) {
                inputAnim.lunchAnim();
            }
        })
    }
    };

    $scope.removeArtiste = function(id) {
        const response = confirm("Voulez vous vraiment supprimer cet artiste?");
        if (response === true) {
            console.log(id);
            $http.delete('/linear_movement/remove/artiste/' + id).success(function(response) {
                // refresh();
            });
            alert("Artiste supprimé!");
        }
    };

    $scope.showInfoArtiste = function(id) {
        $scope.show = 3;
        console.log(id);
        $http.get('/linear_movement/artiste/' + id).success(function(response) {
            $scope.editArtiste = response;
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
                // refresh();
            })
            alert("Artiste modifié!")
        };
    }
}]);﻿
