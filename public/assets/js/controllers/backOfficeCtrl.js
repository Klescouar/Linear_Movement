app.controller('boCtrl', ['$scope', '$http','dataBackOffice','inputAnim','dataHome','dataArtist', function($scope, $http,dataBackOffice,inputAnim,dataHome,dataArtist) {
    $scope.artist=true;
    $scope.show = 0;
    
/////////////////GET INFOS HOME//////////////////
dataHome.getInfoHome().then((res) => {
   $scope.infoHome=res.data;
})
/////////////////REFRESH DATAS//////////////////
const refresh = () =>{
    dataHome.getInfoHome().then((res) => {
        $scope.infoHome=res.data;
    })
    dataArtist.getInfoAllArtist().then((res) =>{
        $scope.infoArtist=res.data;
    })
}
///////////////////CREATE NEW ARTIST//////////////////
    $scope.addArtist = () => {
    $scope.artist=true;
    // const pushEvents = () =>{
    //     console.log("coucou")
    //     let event1 = {
    //         dateEvent : $scope.dateEvent1,
    //         descriptionEvent : $scope.descriptionEvent1,
    //         placeEvent : $scope.placeEvent1
    //     }
    //     console.log(event1.dateEvent)
    //     let event2 = {
    //         dateEvent : $scope.dateEvent2,
    //         descriptionEvent : $scope.descriptionEvent2,
    //         placeEvent : $scope.placeEvent2
    //     }
    //     return datasArtist.events.push(event1,event2)
    // }
    //pushEvents()
        let datasArtist = {
            name: $scope.name,
            bio: $scope.biography,
            facebook: $scope.facebook,
            discorgs: $scope.discorgs,
            resident: $scope.resident,
            soundcloud: $scope.soundcloud,
            photo: $scope.photo,
            events :[
            {
                dateEvent : $scope.dateEvent1,
                descriptionEvent : $scope.descriptionEvent1,
                placeEvent : $scope.placeEvent1
            },{
                dateEvent : $scope.dateEvent2,
                descriptionEvent : $scope.descriptionEvent2,
                placeEvent : $scope.placeEvent2
            }
            ]
            // dateEvent1: $scope.dateEvent1,
            // descriptionEvent1: $scope.descriptEvent1,
            // placeEvent1: $scope.spotEvent1,
            // dateEvent2: $scope.dateEvent2,
            // descriptionEvent2: $scope.descriptEvent2,
            // placeEvent2: $scope.spotEvent2,
            // dateEvent3: $scope.dateEvent3,
            // descriptionEvent3: $scope.descriptEvent3,
            // placeEvent3: $scope.spotEvent3,
            // dateEvent4: $scope.dateEvent4,
            // descriptionEvent4: $scope.descriptEvent4,
            // placeEvent4: $scope.spotEvent4,
            // dateEvent5: $scope.dateEvent5,
            // descriptionEvent5: $scope.descriptEvent5,
            // placeEvent5: $scope.spotEvent5
        };
        console.log(datasArtist.events)
        dataArtist.createArtist(datasArtist).then((res) => {
            if (res.data.errmsg === undefined) {
                inputAnim.lunchAnim();
            }else{
                $scope.artist= false;
            }
            refresh();
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
            refresh();
        })
    }
    };
///////////////////REMOVE ARTIST//////////////////
$scope.removeArtist = (id) => {
    if (confirm("Êtes vous sur de vouloir supprimer ?")) {
        dataArtist.deleteArtist(id).then((res) => {
            console.log(res)
        });
    }
};
dataArtist.getInfoAllArtist().then((res) => {
    $scope.infoArtist=res.data;
});
///////////////////SHOW ARTIST TO UPDATE//////////////////
$scope.showInfoArtist = (id) =>{
    $scope.show = 3;
    dataArtist.getInfoArtist(id).then((res) => {
        console.log(id)
    $scope.infoOneArtist=res.data;
    console.log($scope.infoOneArtist)
    });
}

    $scope.updateArtiste = function(id) {
        let datasArtist = {
            name: $scope.name,
            bio: $scope.biography,
            facebook: $scope.facebook,
            discorgs: $scope.discorgs,
            resident: $scope.resident,
            soundcloud: $scope.soundcloud,
            photo: $scope.photo,
            // dateEvent1: $scope.dateEvent1,
            // descriptionEvent1: $scope.descriptEvent1,
            // placeEvent1: $scope.spotEvent1,
            // dateEvent2: $scope.dateEvent2,
            // descriptionEvent2: $scope.descriptEvent2,
            // placeEvent2: $scope.spotEvent2,
            // dateEvent3: $scope.dateEvent3,
            // descriptionEvent3: $scope.descriptEvent3,
            // placeEvent3: $scope.spotEvent3,
            // dateEvent4: $scope.dateEvent4,
            // descriptionEvent4: $scope.descriptEvent4,
            // placeEvent4: $scope.spotEvent4,
            // dateEvent5: $scope.dateEvent5,
            // descriptionEvent5: $scope.descriptEvent5,
            // placeEvent5: $scope.spotEvent5
        };
            // $http.put('/linear_movement/update/artiste/' + id, updateArtist).success(function(response) {
            // refresh();
            // })
            // alert("Artiste modifié!")
    }
}]);﻿
