//variables for stuff
var characterClass = $("#class");
var characterRace = $("#race");
var characterAlignment = $("#alignment");
var characterName = $("#name");

var nameQueryURL = "https://uinames.com/api/?amount=1";

function getInfo() {
    $("#class").empty();
    $("#race").empty();
    $("#alignment").empty();
    $("#name").empty();

    fetch(nameQueryURL).then(function (response) {
      
        var nameRollOne = response;
        var nameRollTwo = response;
        var rolledName = nameRollOne + nameRollTwo;
        $("#name").append(rolledName);
        console.log(rolledName);
    });
    fetch("https://randommer.io/api/Name?nameType=fullname&quantity=1",-H "accept: */*" "X-Api-Key: e18fb123ab044372910e745648ee5fa0" )
    .then(response.response.json() )
    .then

};

getInfo();
//function rerollInfo() {

//}