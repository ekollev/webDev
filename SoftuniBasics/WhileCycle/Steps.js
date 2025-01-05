function Steps(input){
let StepsGoal = 10000;
let index = 0;
let finalsteps = 0;
while (finalsteps < 10000){
   let steps = input[index];
    if ("Going home" === input[index]){
        index++
        steps = Number(input[index]);
        finalsteps += steps;
        break;
    }
    steps = Number(input[index]);
    finalsteps += steps;
    index++

}if (finalsteps >= 10000){
    console.log(`Goal reached! Good job!`);
    console.log(`${finalsteps - StepsGoal} steps over the goal!`);
}else{
console.log(`${StepsGoal - finalsteps} more steps to reach goal.`);
}
}Steps(["1500", "300", "2500", "3000", "Going home", "200"])
//Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден.
// Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. 
//Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва 
//"Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
//Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките,
//които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише:
// "{разликата между стъпките} more steps to reach goal."