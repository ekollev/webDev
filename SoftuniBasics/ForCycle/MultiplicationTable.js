function MultiplicationTable(input){
    let num = input[0];
    for (let i = 1; i <= 10; i++){
        let result = i * num;
        console.log(`${i} * ${num} = ${result}`)
    }
}MultiplicationTable(["5"])