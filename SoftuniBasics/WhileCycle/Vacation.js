function Vacation(input) {
    let moneyNeeded = Number(input[0]);
    let currentmoney = Number(input[1]);
    let spendDaysCounter = 0;
    let daysCounter = 0;
    let index = 2;
    let currentInput = input[index];
    while (currentmoney < moneyNeeded) {
        daysCounter++
        index++
        if (currentInput === "spend") {
            spendDaysCounter++

            if (spendDaysCounter === 5) {
                console.log("You can't save the money.")
                console.log(daysCounter)
                break;
            }
            let moneytoSpend = Number(input[index]);
            currentmoney = currentmoney - moneytoSpend;
            if (currentmoney < 0) {
                currentmoney = 0;
            }
        } else if (currentInput === "save") {
            spendDaysCounter = 0;
            let moneytoSave = Number(input[index]);
            currentmoney = currentmoney + moneytoSave;
        } index++
        currentInput = input[index];
    }


    if (currentmoney >= moneyNeeded) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }


}
Vacation(["110",

    "60",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10", "spend", "10"])