function tourist(input) {
    let index = 1;
    let budget = Number(input[0]);
    let productsBought = 0;
    let pricetotal = 0;
    while (input[index] !== "Stop") {
        let productPrice = Number(input[++index]);
        if ((productsBought + 1) % 3 === 0) {
            productPrice = productPrice / 2;
        }let isBudgetEnough = productPrice <= budget;
        if (isBudgetEnough){
            productsBought++
            budget = budget - productPrice;
            pricetotal += productPrice;
        }else{
            budget -= productPrice;
            break;
        }
        index++;

    } if (budget < 0) {
        console.log(`You don't have enough money!`);
        console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
    }else{
        console.log(`You bought ${productsBought} products for ${pricetotal.toFixed(2)} leva.`);
    }

} tourist(["54", "Thermal underwear", "24", "Sunscreen", "45"])
//(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"])
//(["54", "Thermal underwear", "24", "Sunscreen", "45"])

//(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"])

//Времето се затопля и туристите започват да си правят разходки високо в планината, където все още има сняг,
//като за целта те трябва да закупят нужната туристическа екипировка.
//Вашата задача е да напишете програма, която да изчислява, стойността на екипировката,
//както и дали определения бюджет е достатъчен или не, като се знае, че в магазина има следната промоция:
// Всеки трети продукт е на половин цена.
//От конзолата се чете:
//На първи ред – бюджетът - реално число в интервала [1.00… 100000.00]
//След това поредица от два реда (до получаване на команда "Stop" или при заявка за купуване на продукт,
//чиято стойност е по-висока от наличния бюджет) :
//Име на продукта – текст
//Цена на продукта – реално число в интервала [1.00… 5000.00]
//На конзолата да се отпечатат следните редове според случая:
//При получаване на командата "Stop", на един ред:
//You bought {брой на закупените продукти} products for {цена на покупките} leva.
// При заявка за покупка на продукт, чиято цена е по-висока от останалите пари, на два реда:
//You don't have enough money!" "You need {недостигащи пари} leva!