function GodzillavsKong(input){
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let statistClothingPrice = Number(input[2]);
    let decor = budget * 0.1;
    if (statist > 150){
        statistClothingPrice = statistClothingPrice - (statistClothingPrice * 0.1);
    }let finalprice = (statist * statistClothingPrice) + decor;
    if (finalprice > budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(finalprice - budget).toFixed(2)} leva more.`)
    }else if (finalprice <= budget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - finalprice).toFixed(2)} leva left.`)
    }

}GodzillavsKong([9587.88, 222, 55.68])