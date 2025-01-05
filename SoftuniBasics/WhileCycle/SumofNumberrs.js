function SumofNumbers(input){
    let firstNumber = Number(input[0]);
    let index = 1;
    let result = 0;
    while (true){
        result += parseInt(input[index]);
        if (result >= firstNumber){
            console.log(result)
            break;
        }index++

    }
}SumofNumbers(["20", "1", "2", "3", "4", "5", "6"])