
var diceRollA, diceRollB, diceRollC, diceRollD;


function diceRoll() {
    diceRollA = 1+(Math.floor(Math.random() * 6));
    diceRollB = 1+(Math.floor(Math.random() * 6));
    diceRollC = 1+(Math.floor(Math.random() * 6));
    diceRollD = 1+(Math.floor(Math.random() * 6));

}

diceRoll();

//strength = diceRoll();

//define variables for names
var playerName="";
var charname="";

//capture submitted names
//pass names to an id to print on character CSSStyleSheet


$("#submitName").click(function(event) { 
    event.preventDefault();
    playerName = $('#playerName').val();
    $("#nameSlot").text(playerName);
});

$("#submitCharName").click(function(event) { 
    event.preventDefault();
    charname = $('#charname').val();
    $("#charnameSlot").text(charname);
});

//define variables for other information
var charcls ='';
var race='';
var alignment='';

//capture the submitted selection for race
//pass race to an id to print on character sheet

$("#submitrace").click(function(event) { 
    event.preventDefault();
    race = $('#race :selected').text();
    $("#raceSlot").text(race);
});

//capture the selection to look up for race
//look up race on the D&D API
$("lookuprace").click(function(event) {
    event.preventDefault();
    race = $('#race :selected').text();
    //api lookup race code here
});

//capture the submitted selection for class
//pass class to an id to print on character sheet

$("#submitcls").click(function(event) { 
    event.preventDefault();
    charcls = $('#charcls :selected').text();
    $("#clsSlot").text(charcls);
});

//capture the selection to look up for class
//look up class on the D&D API
$("lookupcharcls").click(function(event) {
    event.preventDefault();
    charcls = $('#charcls :selected').text();
    //api lookup charcls code here
});

//capture the submitted selection for alignment
//pass alignment to an id to print on character sheet

$("#submitalign").click(function(event) { 
    event.preventDefault();
    alignment = $('#alignment :selected').text();
    $("#alignSlot").text(alignment);
});

