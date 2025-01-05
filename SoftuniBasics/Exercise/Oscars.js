function Oscars(input){
let rent = Number(input[0]);
let statues = rent - (rent * 0.3);
let cathering = statues - (statues * 0.15);
let sounding = cathering / 2;
let result = rent + statues + cathering + sounding;
console.log(result.toFixed(2));



}Oscars([5555])