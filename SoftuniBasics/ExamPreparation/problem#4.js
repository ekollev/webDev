function problem4(input){
let daysCount = Number(input[0]);
let totalLitres = 0;
let totalDegrees = 0;
let averagedegrees = 0;
let index = 0;
  for (let i = 1; i <= daysCount; i++){
    let rakiqLitres = Number(input[++index]);
    totalLitres += rakiqLitres;
    
    let bevarageDegrees = Number(input[++index]);
    totalDegrees += bevarageDegrees * rakiqLitres;
    


  }averagedegrees = totalDegrees / totalLitres;
  console.log(`Liter: ${totalLitres.toFixed(2)}`);
  console.log(`Degrees: ${averagedegrees.toFixed(2)}`);
  if (averagedegrees < 38){
    console.log("Not good, you should baking!");
  }else if (averagedegrees = 38 && averagedegrees <= 42){
    console.log("Super!");
  }else{
    console.log("Dilution with distilled water!");
  }
}problem4(["2",
"200",
"43",
"200",
"40"])