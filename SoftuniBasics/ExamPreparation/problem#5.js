function problem5(input){
let index = 0;
let command = input[index];
let goalComparing = 0;
let hatTrick = false;
let playerwhowins = "";
while ("END" !== command){
    let PlayerName = input[index];
    index++
    let scoredGoals = Number(input[index]);
    if (scoredGoals > goalComparing){
        playerwhowins = PlayerName;
    }
    goalComparing = scoredGoals;
    if (scoredGoals >= 3){
        hatTrick = true;
    }if (scoredGoals >= 10){
        break;
    }
    index++
    command = input[index];

}console.log(`${playerwhowins} is the best player!`);
if (hatTrick === true){
    console.log(`He has scored ${goalComparing} goals and made a hat-trick !!!`);
}else{
    console.log(`He has scored ${goalComparing} goals.`);
}

}problem5(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])
