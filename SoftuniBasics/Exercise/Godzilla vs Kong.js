function Godzilla(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let statistClothes = Number(input[2]);
    let decor = budget * 0.1;
    if (statists > 150){
        statistClothes = statistClothes - (statistClothes * 0.1);
    }let finalprice = (statists * statistClothes) + decor;
    if (finalprice > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalprice - budget).toFixed(2)} leva more.`);
    }else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - finalprice).toFixed(2)} leva left.`);
    }
}Godzill(["20000",
"120",
"55.5"])