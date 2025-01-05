function Combinations(input){
    let magicNumber = Number(input[0]);
    let comboCounter = 0;
    for (let x1 = 0; x1 <= magicNumber; x1++){
         for (let x2 = 0; x2 <= magicNumber; x2++){
           for (let x3 = 0; x3 <= magicNumber; x3++){
            if (x1 + x2 + x3 === magicNumber){
                comboCounter++
            }
           }
        }
    }console.log(Number(comboCounter));
}Combinations([20])