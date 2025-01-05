function FishingBoat(input){
    let budget = Number(input[0]);
    let season = String(input[1]);
    let fishermencount = Number(input[2]);
    rent = 0;
    finalprice = 0;
    if (season === "Spring"){
        rent = 3000;
    }else if (season === "Summer" || season === "Autumn"){
        rent = 4200;
    }else if (season === "Winter"){
        rent = 2600;

    }
    if (fishermencount <= 6){
        rent = rent - (rent * 0.1)
    }else if (fishermencount >= 7 && fishermencount <= 11){
        rent = rent - (rent * 0.15)
    }else if (fishermencount > 12){
        rent = rent - (rent * 0.25)
    }if (fishermencount % 2 == 0 && season != "Autumn"){
        rent = (rent - (rent * 0.05))
    }
    if (rent <= budget){
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
    }else if (rent > budget){
    
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
    }
}FishingBoat ([2000, "Winter", 13])