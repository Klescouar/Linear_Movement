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
            },{
                dateEvent : $scope.dateEvent3,
                descriptionEvent : $scope.descriptionEvent3,
                placeEvent : $scope.placeEvent3
            },{
                dateEvent : $scope.dateEvent4,
                descriptionEvent : $scope.descriptionEvent4,
                placeEvent : $scope.placeEvent4
            },{
                dateEvent : $scope.dateEvent5,
                descriptionEvent : $scope.descriptionEvent5,
                placeEvent : $scope.placeEvent5
            }
            ]
        };
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
    console.log("coucou")
    console.log(id);
    if (confirm("Êtes vous sur de vouloir supprimer ?")) {
        dataArtist.deleteArtist(id).then((res) => {
            console.log(id);
            refresh();
        });
    }
};
dataArtist.getInfoAllArtist().then((res) => {
    $scope.infoArtist=res.data;
});
let idArtist;
///////////////////SHOW ARTIST TO UPDATE//////////////////
$scope.showInfoArtist = (id) =>{
    idArtist = id;
    console.log(idArtist)
    $scope.show = 3;
    dataArtist.getInfoArtist(id).then((res) => {
    $scope.infoOneArtist=res.data;
    });
}
///////////////////UPDATE ARTISTS//////////////////
    $scope.updateArtist = () => {
        let id = idArtist;
        let datasArtist = {
            name: $scope.infoOneArtist.name,
            bio: $scope.infoOneArtist.bio,
            facebook: $scope.infoOneArtist.facebook,
            discorgs: $scope.infoOneArtist.discorgs,
            resident: $scope.infoOneArtist.resident,
            soundcloud: $scope.infoOneArtist.soundcloud,
            photo: $scope.infoOneArtist.photo,
            events : [
            {
                dateEvent : $scope.infoOneArtist.events[0].dateEvent,
                descriptionEvent : $scope.infoOneArtist.events[0].descriptionEvent,
                placeEvent : $scope.infoOneArtist.events[0].placeEvent
            },{
                dateEvent : $scope.infoOneArtist.events[1].dateEvent,
                descriptionEvent : $scope.infoOneArtist.events[1].descriptionEvent,
                placeEvent : $scope.infoOneArtist.events[1].placeEvent
            },{
                dateEvent : $scope.infoOneArtist.events[2].dateEvent,
                descriptionEvent : $scope.infoOneArtist.events[2].descriptionEvent,
                placeEvent : $scope.infoOneArtist.events[2].placeEvent
            },{
                dateEvent : $scope.infoOneArtist.events[3].dateEvent,
                descriptionEvent : $scope.infoOneArtist.events[3].descriptionEvent,
                placeEvent : $scope.infoOneArtist.events[3].placeEvent
            },{
                dateEvent : $scope.infoOneArtist.events[4].dateEvent,
                descriptionEvent : $scope.infoOneArtist.events[4].descriptionEvent,
                placeEvent : $scope.infoOneArtist.events[4].placeEvent
            }
            ]
        };
        dataArtist.updateArtist(id,datasArtist).then((res) => {
            inputAnim.lunchAnim();
            refresh();
        })
    }
}]);﻿
