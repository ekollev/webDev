function TrekkingMania(input){
  let climbingGroups = Number(input[0]);
  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;
  let allPeople = 0;
  let people = 0;
  for (let index = 1; index <= climbingGroups;index++){
     allPeople += Number(input[index]);
     people = Number(input[index])
     if (people < 6){
        musala += Number(input[index]);
     }else if(people <= 12){
      monblan += Number(input[index]);
     }else if (people <= 25){
      kilimanjaro += Number(input[index]);
     }else if (people <= 40){
      k2 += Number(input[index]);
     }else if (people >= 41){
      everest += Number(input[index]);
     }
    
  }let climbingmusala = (musala / allPeople) * 100;
  let climbingmonblan = (monblan / allPeople) * 100;
  let climbingkilimanjaro = (kilimanjaro / allPeople) * 100;
  let climbingk2 = (k2 / allPeople) * 100;
  let climbingeverest = (everest / allPeople) * 100;
  console.log(`${climbingmusala.toFixed(2)}%`)
  console.log(`${climbingmonblan.toFixed(2)}%`)
  console.log(`${climbingkilimanjaro.toFixed(2)}%`)
  console.log(`${climbingk2.toFixed(2)}%`)
  console.log(`${climbingeverest.toFixed(2)}%`)
  
}TrekkingMania(["10",

"10",

"5",

"1",

"100",

"12", "26", "17", "37", "40", "78"])