//variables for stuff
var characterClass = $("#class");
var characterRace = $("#race");
var characterAlignment = $("#alignment");
var characterName = $("#name");

function getInfo() {
    $("#name").empty();
​
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var targetUrl = 'https://randommer.io/api/Name?nameType=fullname&quantity=1';
​
    fetch(proxyUrl+targetUrl, {
        headers: {
            Accept: "*/*",
            "X-Api-Key": "e18fb123ab044372910e745648ee5fa0"
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
​
        console.log(data);
​
        var nameRollOne = data;
        var nameRollTwo = data;
        var rolledName = nameRollOne + nameRollTwo;
        $("#name").append(rolledName);
        console.log(rolledName);
    });
};
​
getInfo();
​
var dndApiUrl = "https://www.dnd5eapi.co/api/";
var classSelection = $("#charcls");
​
function getClassInfo() {
    fetch(dndApiUrl + "classes/" + classSelection)
        .then(function (response) {
            return response.json
        })
            .then(function (response) {
                console.log(response.name);
​
            })
};
​
​
​
​
var diceRollA, diceRollB, diceRollC, diceRollD;
​
function diceRoll() {
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));
​
    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
​
    //put sorting function here
    return diceRollA + diceRollB + diceRollC + diceRollD
}
​
diceRoll();
​
//strength = diceRoll();
​
//define variables for other information
var charcls = '';
var race = '';
var alignment = '';
​
//capture the submitted selection for race
//pass race to an id to print on character sheet
​
$("#submitrace").click(function (event) {
    event.preventDefault();
    race = $('#race :selected').text();
    $("#raceSlot").text(race);
});
​
//capture the submitted selection for class
//pass class to an id to print on character sheet
​
$("#submitcls").click(function (event) {
    event.preventDefault();
    charcls = $('#charcls :selected').text();
    $("#clsSlot").text(charcls);
});
​
//capture the submitted selection for alignment
//pass alignment to an id to print on character sheet
​
$("#submitalign").click(function (event) {
    event.preventDefault();
    alignment = $('#alignment :selected').text();
    $("#alignSlot").text(alignment);
});