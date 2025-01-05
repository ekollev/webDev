function EasterEggsBattle(input){

//variables
let index = 0;
let player1eggs = input[index]
let player2eggs = input[++index]
let command = input[++index];

//whileCycleStarts
while(command !== "End"){
//inputCheck

 if (command === "one"){
    player2eggs--
 }
 else if(command === "two"){
    player1eggs--
}

//winnerCheck
if (player1eggs <= 0){
    console.log(`Player one is out of eggs. Player two has ${player2eggs} eggs left.`);
    break;
}
else if(player2eggs <= 0){
    console.log(`Player two is out of eggs. Player one has ${player1eggs} eggs left.`);
    break;
}

//getNextInput
index++
command = input[index]

}//whileCycleEnds

//finallog
if (player1eggs > 0 && player2eggs > 0){

console.log(`Player one has ${player1eggs} eggs left.`);
console.log(`Player two has ${player2eggs} eggs left.`);

}

}EasterEggsBattle(["2",
    "6",
    "one",
    "two",
    "two"
    ])  