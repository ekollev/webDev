function Lilly(input) {
    let age = Number(input[0]);
    let washingmachineprice = Number(input[1]);
    let singletoyprice = Number(input[2]);
    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;
    for (let currentAge = 1; currentAge <= age; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = singletoyprice * toysCounter;
    let totalSavedMoney = (totalMoneyFromToys + savedMoney) - stolenMoney;
    if (totalSavedMoney >= washingmachineprice) {
        console.log(`Yes! ${(totalSavedMoney - washingmachineprice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingmachineprice - totalSavedMoney).toFixed(2)}`);
    }
} Lilly(["10", "170.00", "6"])