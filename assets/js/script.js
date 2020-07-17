//variables
var characterClass = $("#class");
var characterRace = $("#race");
var characterAlignment = $("#alignment");
var characterName = $("#name");
var dndApiUrl = "https://www.dnd5eapi.co/api/";
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var targetUrl = 'https://randommer.io/api/Name?nameType=fullname&quantity=1';

//Upon click of Random Name button, fetch a random name and add it to text input

function rollrandom() {
    $("#charnameSlot").empty();
    fetch(proxyUrl + targetUrl, {
        headers: {
            Accept: "*/*",
            "X-Api-Key": "ff4e1a67e2974dfbab6d8ef5f871cf8a",
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        var rolledName = data;
        //moved from random button to add the localstorage functionality to the api function
        localStorage.charName = rolledName;
        document.getElementById("charnameSlot").innerHTML = localStorage.charName;
    });
};

//Random button sends info same place inputted name does

$("#random").click(function (event) {
    event.preventDefault();
    rollrandom();
});



var diceRollA, diceRollB, diceRollC, diceRollD;


$("#str-btn").click(function (event) {
    console.log(attributes);
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));

    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
    var result = [Number(diceRollA), Number(diceRollB), Number(diceRollC), Number(diceRollD)];
    result.sort();
    console.log(result);
    result.map(Number)
    console.log(result)
    resultWithoutLowest = result.slice(1)
    console.log({ resultWithoutLowest });
    var sum = { resultWithoutLowest }
    console.log(sum)

    var rollTotal = resultWithoutLowest.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(rollTotal);
    localStorage.strength = rollTotal;
    document.getElementById("str").innerHTML = rollTotal;
    event.preventDefault();
});

$("#dex-btn").click(function (event) {
    console.log(attributes);
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));

    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
    var result = [Number(diceRollA), Number(diceRollB), Number(diceRollC), Number(diceRollD)];
    result.sort();
    console.log(result);
    result.map(Number)
    console.log(result)
    resultWithoutLowest = result.slice(1)
    console.log({ resultWithoutLowest });
    var sum = { resultWithoutLowest }
    console.log(sum)

    var rollTotal = resultWithoutLowest.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(rollTotal);
    localStorage.dexterity = rollTotal;
    document.getElementById("dex").innerHTML = rollTotal;
    event.preventDefault();
});

$("#con-btn").click(function (event) {
    console.log(attributes);
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));

    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
    var result = [Number(diceRollA), Number(diceRollB), Number(diceRollC), Number(diceRollD)];
    result.sort();
    console.log(result);
    result.map(Number)
    console.log(result)
    resultWithoutLowest = result.slice(1)
    console.log({ resultWithoutLowest });
    var sum = { resultWithoutLowest }
    console.log(sum)

    var rollTotal = resultWithoutLowest.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(rollTotal);
    localStorage.constitution = rollTotal;
    document.getElementById("con").innerHTML = rollTotal;
    event.preventDefault();
});

$("#int-btn").click(function (event) {
    console.log(attributes);
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));

    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
    var result = [Number(diceRollA), Number(diceRollB), Number(diceRollC), Number(diceRollD)];
    result.sort();
    console.log(result);
    result.map(Number)
    console.log(result)
    resultWithoutLowest = result.slice(1)
    console.log({ resultWithoutLowest });
    var sum = { resultWithoutLowest }
    console.log(sum)

    var rollTotal = resultWithoutLowest.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(rollTotal);
    localStorage.intelligence = rollTotal;
    document.getElementById("int").innerHTML = rollTotal;
    event.preventDefault();
});

$("#wis-btn").click(function (event) {
    console.log(attributes);
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));

    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
    var result = [Number(diceRollA), Number(diceRollB), Number(diceRollC), Number(diceRollD)];
    result.sort();
    console.log(result);
    result.map(Number)
    console.log(result)
    resultWithoutLowest = result.slice(1)
    console.log({ resultWithoutLowest });
    var sum = { resultWithoutLowest }
    console.log(sum)

    var rollTotal = resultWithoutLowest.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(rollTotal);
    localStorage.wisdom = rollTotal;
    document.getElementById("wis").innerHTML = rollTotal;
    event.preventDefault();
});

$("#cha-btn").click(function (event) {
    console.log(attributes);
    diceRollA = 1 + (Math.floor(Math.random() * 6));
    diceRollB = 1 + (Math.floor(Math.random() * 6));
    diceRollC = 1 + (Math.floor(Math.random() * 6));
    diceRollD = 1 + (Math.floor(Math.random() * 6));

    console.log({ diceRollA, diceRollB, diceRollC, diceRollD })
    var result = [Number(diceRollA), Number(diceRollB), Number(diceRollC), Number(diceRollD)];
    result.sort();
    console.log(result);
    result.map(Number)
    console.log(result)
    resultWithoutLowest = result.slice(1)
    console.log({ resultWithoutLowest });
    var sum = { resultWithoutLowest }
    console.log(sum)

    var rollTotal = resultWithoutLowest.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(rollTotal);
    localStorage.charisma = rollTotal;
    document.getElementById("cha").innerHTML = rollTotal;
    event.preventDefault();
});



//define variables for names
var playerName = "";
var charname = "";

//capture submitted names
//saves variable in local storage
//calls local storage to an id


$("#submitName").click(function (event) {
    event.preventDefault();
    localStorage.playerName = $('#playerName').val();
    document.getElementById("nameSlot").innerHTML = localStorage.playerName;
});

$("#submitCharName").click(function (event) {
    event.preventDefault();
    localStorage.charName = $('#charname').val();
    document.getElementById("charnameSlot").innerHTML = localStorage.charName;
});

//define variables for other information
var charcls = '';
var race = '';
var alignment = '';

//capture the submitted selection for race
//saves variable in local storage
//calls local storage to an id

$("#submitrace").click(function (event) {
    event.preventDefault();
    localStorage.race = $('#race option:selected').text();
    document.getElementById("raceSlot").innerHTML = localStorage.race;
});

//capture the selection to look up for race
//look up race on the D&D API
$("#lookuprace").click(function (event) {
    event.preventDefault();
    race = $('#race option:selected').val();
    console.log(race);
    console.log(dndApiUrl + "races/" + race);
    $.get(dndApiUrl + "races/" + race)
        .then(function () {
            $("#racequeryreturn").empty();
            var raceQueryLink = dndApiUrl + "races/" + race;
            console.log(raceQueryLink);
            var link = document.createElement('a');
            link.textContent = "Race Info";
            link.href = raceQueryLink;
            $("#racequeryreturn").append(link);
        })
});

//capture the submitted selection for class
//pass class to an id to print on character sheet

$("#submitcls").click(function (event) {
    event.preventDefault();
    localStorage.charcls = $('#charcls option:selected').text();
    document.getElementById("clsSlot").innerHTML = localStorage.charcls;
});

//capture the selection to look up for class
//look up class on the D&D API
$("#lookupcharcls").click(function (event) {
    event.preventDefault();
    charcls = $('#charcls option:selected').val();
    $.get(dndApiUrl + "classes/" + charcls)
        .then(function (response) {
            $("#charclsqueryreturn").empty();
            var clsQueryLink = dndApiUrl + "classes/" + charcls;
            console.log(clsQueryLink);
            var link = document.createElement('a');
            link.textContent = "Class Info";
            link.href = clsQueryLink;
            $("#charclsqueryreturn").append(link);
        })
});

//capture the submitted selection for alignment
//pass alignment to an id to print on character sheet

$("#submitalign").click(function (event) {
    event.preventDefault();
    localStorage.alignment = $('#alignment option:selected').text();
    document.getElementById("alignSlot").innerHTML = localStorage.alignment;
});



$(document).ready(function () {
    $(".populate").click(function () {
        $("#names").hide();
        $(".slot2").hide();
        $(".charcls").hide();
        $(".alignment").hide();
        document.getElementById("clsSlot").innerHTML = localStorage.charcls;
        document.getElementById("alignSlot").innerHTML = localStorage.alignment;
        document.getElementById("raceSlot").innerHTML = localStorage.race;
        document.getElementById("charnameSlot").innerHTML = localStorage.charName;
        document.getElementById("str").innerHTML = localStorage.strength;
        document.getElementById("dex").innerHTML = localStorage.dexterity;
        document.getElementById("con").innerHTML = localStorage.constitution;
        document.getElementById("int").innerHTML = localStorage.intelligence;
        document.getElementById("wis").innerHTML = localStorage.wisdom;
        document.getElementById("cha").innerHTML = localStorage.charisma;
    });
    $(".redo").click(function () {
        $("#names").show();
        $(".slot2").show();
        $(".charcls").show();
        $(".alignment").show();
    });
});
