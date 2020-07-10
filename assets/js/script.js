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

