function movie(input){

 let budget = Number(input[0]);
 let destination = String(input[1]);
 let season = String(input[2]);
 let daysNumber = Number(input[3]);

 let moneyneeded = 0;

 switch(season){

   case "Winter":
  if (destination === "Dubai"){
    moneyneeded = moneyneeded +  45000 - (45000 * 0.3);
  }else if(destination === "Sofia"){
    moneyneeded = moneyneeded +  17000 + (17000 * 0.25);
  }else if(destination === "London"){
    moneyneeded = moneyneeded + 24000;
  }
  break;

   case "Summer":
    if (destination === "Dubai"){
        moneyneeded = moneyneeded +  40000 - (40000 * 0.3);
      }else if(destination === "Sofia"){
        moneyneeded = moneyneeded +  12500 + (12500 * 0.25);
      }else if(destination === "London"){
        moneyneeded = moneyneeded + 20250;
      }
    break;

 }
 moneyneeded = moneyneeded * daysNumber;
if (budget >= moneyneeded){
    console.log(`The budget for the movie is enough! We have ${((budget - moneyneeded).toFixed(2))} leva left!`);
}else{
    console.log(`The director needs ${((moneyneeded - budget).toFixed(2))} leva more!`); 
}

}movie(["200000",
"London",
"Summer",
"7"])
