app.service("inputAnim", [ '$http','$timeout', function($http, $timeout) {

this.lunchAnim = () => {
$( '#inputArtist' ).val('Créé !');
$( '#inputHome' ).val('Modifié !');
$( '#inputArtist' ).val('Modifié !');
$('.button-form').css("background-color", "#5fba7d");
$timeout(function() {
$( '#inputArtist' ).val('Ajouter');
$( '#inputHome' ).val('Modifier home');
$( '#inputArtist' ).val('Modifier artiste');
$('.button-form').css("background-color", "#87adc7");
 }, 3000);

}
}]);