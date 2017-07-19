app.service("inputAnim", [ '$http','$timeout', function($http, $timeout) {
this.lunchAnim = () => {
$( '#inputCreate' ).val('Créé !');
$( '#inputHome' ).val('Modifié !');
$( '#inputUpdate' ).val('Modifié !');
$('.button-form').css("background-color", "#5fba7d");
$timeout(function() {
$( '#inputCreate' ).val('Ajouter');
$( '#inputHome' ).val('Modifier home');
$( '#inputUpdate' ).val('Modifier artiste');
$('.button-form').css("background-color", "#87adc7");
 }, 3000);
}
}]);