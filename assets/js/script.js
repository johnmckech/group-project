var diceRollA, diceRollB, diceRollC, diceRollD;

function diceRoll() {
    diceRollA = 1+(Math.floor(Math.random() * 6));
    diceRollB = 1+(Math.floor(Math.random() * 6));
    diceRollC = 1+(Math.floor(Math.random() * 6));
    diceRollD = 1+(Math.floor(Math.random() * 6));

    console.log({diceRollA, diceRollB, diceRollC, diceRollD})

    //put sorting function here
    return diceRollA+diceRollB+diceRollC+diceRollD
}

diceRoll();

//strength = diceRoll();
