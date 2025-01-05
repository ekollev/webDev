function sum(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let flag = false;
    let comboCounter = 0;
    for (let n1 = start; n1 <= end; n1++){
       for (let n2 = start; n2 <= end; n2++){
        comboCounter++
        if (n1 + n2 === magicNumber){
           console.log(`Combination N:${comboCounter} (${n1} + ${n2} = ${magicNumber})`);
           flag = true;
           break;
        } 
       }if (flag === true){
        break;
    }
    }if (flag === false){
        console.log(`${comboCounter} combinations - neither equals ${magicNumber}`);
    }
}sum(["88", "888", "2000"])