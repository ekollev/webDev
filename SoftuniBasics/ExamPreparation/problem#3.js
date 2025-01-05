function problem3(input){
let peopleCount = Number(input[0]);
let season = input[1];
let pricefortheExcursion = 0;
switch (season){
    case "spring":
        if (peopleCount <= 5){
           pricefortheExcursion = peopleCount * 50;
        }else if (peopleCount > 5){
            pricefortheExcursion = peopleCount * 48;
        }break;
        case "summer":
        if (peopleCount <= 5){
           pricefortheExcursion = peopleCount * 48.5;
        }else if (peopleCount > 5){
            pricefortheExcursion = peopleCount * 45;
        }pricefortheExcursion = pricefortheExcursion - pricefortheExcursion * 0.15;
        break;
        case "autumn":
        if (peopleCount <= 5){
           pricefortheExcursion = peopleCount * 60;
        }else if (peopleCount > 5){
            pricefortheExcursion = peopleCount * 49.5;
        }break;
        case "winter":
            if (peopleCount <= 5){
               pricefortheExcursion = peopleCount * 86;
            }else if (peopleCount > 5){
                pricefortheExcursion = peopleCount * 85;
            }
            pricefortheExcursion = (pricefortheExcursion * 0.08) + pricefortheExcursion;
            break;


}console.log(`${pricefortheExcursion.toFixed(2)} leva.`);
}problem3(["20", "winter"])