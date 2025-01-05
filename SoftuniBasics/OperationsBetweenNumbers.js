function OperationsBetweenNumbers(input){
    let firstNumber = Number (input[0]);
    let secondNumber = Number (input[1]);
    let operator = String(input[2]);
    let result = 0;
    if (operator == "+"){
        let evenorOdd = "";
        result = firstNumber + secondNumber;
        if (result % 2 == 0){
            evenorOdd = "even";
        }else{
            evenorOdd = "odd";
        }
        console.log (`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenorOdd}`)
    }if (operator == "-"){
        result = firstNumber - secondNumber;
        if (result % 2 == 0){
            evenorOdd = "even";
        }else{
            evenorOdd = "odd";
        }console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenorOdd}`)
    }if (operator == "*"){
        result = firstNumber * secondNumber;
        if (result % 2 == 0){
            evenorOdd = "even";
        }else{
            evenorOdd = "odd";
        }console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenorOdd}`)
    }if (operator == "/"){
        result = firstNumber / secondNumber;
        if (secondNumber == 0){
            console.log(`Cannot divide ${firstNumber} by zero`)
        }else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`)
        }
    }if (operator == "%"){
        result = firstNumber % secondNumber;
        if (secondNumber == 0){
            console.log(`Cannot divide ${firstNumber} by zero`)
        }else {
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
    }
    }
}OperationsBetweenNumbers([112, 4, "/"])