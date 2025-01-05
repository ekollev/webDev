function easterlunch(input){

let broiKozunaci = Number(input[0]);
let korisqica = Number(input[1]);
let kgkurabii = Number(input[2]);


let sum = broiKozunaci * 3.2 + korisqica * 4.35 + kgkurabii * 5.4 + (korisqica * 12 * 0.15);

console.log(sum.toFixed(2));

 
}easterlunch(["3",
"2",
"3"])