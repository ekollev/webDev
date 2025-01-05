function AccountBalance(input) {
    let index = 0;
    let moneyindaBank = 0;
    let vnoska = 0;
    while (input[index] !== "NoMoreMoney") {
        vnoska = Number(input[index])
    
        if (input[index] <= 0) {
            console.log("Invalid operation!")
            break;
        } moneyindaBank += vnoska;

        console.log(`Increase: ${vnoska.toFixed(2)}`)
        index++

    }
    console.log(`Total: ${moneyindaBank.toFixed(2)}`)


} AccountBalance(["120", "45.55", "-150"])




//Напишете функция, която пресмята колко общо пари има в сметката, след като направите определен брой вноски.
// Във всеки елемент ще получавате сумата, която трябва да внесете в сметката, до получаване на команда "NoMoreMoney" .
// При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката.
//Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!" и програмата да приключи.
// Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.

//Всички суми, които се печатат, трябва да се форматират до втория знак след десетичната запетая.