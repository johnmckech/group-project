
var diceRollA, diceRollB, diceRollC, diceRollD;

function diceRoll() {
    diceRollA = 1+(Math.floor(Math.random() * 6));
    diceRollB = 1+(Math.floor(Math.random() * 6));
    diceRollC = 1+(Math.floor(Math.random() * 6));
    diceRollD = 1+(Math.floor(Math.random() * 6));

    console.log({diceRollA, diceRollB, diceRollC, diceRollD})
    var result = [diceRollA,diceRollB,diceRollC,diceRollD];
    result.sort();
    console.log(result);
    result.shift()

    var sum = diceRollA + diceRollB + diceRollC + diceRollD
    console.log(sum);

} 

diceRoll();

//strength = diceRoll();

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

//capture the submitted selection for class
//pass class to an id to print on character sheet

$("#submitcls").click(function(event) { 
    event.preventDefault();
    charcls = $('#charcls :selected').text();
    $("#clsSlot").text(charcls);
});

//capture the submitted selection for alignment
//pass alignment to an id to print on character sheet

$("#submitalign").click(function(event) { 
    event.preventDefault();
    alignment = $('#alignment :selected').text();
    $("#alignSlot").text(alignment);
});


