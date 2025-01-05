function Journey(input){
    let budget = Number(input[0]);
    let season = String(input[1]);
    let country = "";
    let accomodity = "";
    let moneyspent = 0;
    if (budget <= 100){
        country = "Bulgaria";
        if (season == "summer"){
            accomodity = "Camp";
            moneyspent = budget * 0.3;

        }else if (season == "winter"){
            moneyspent = budget * 0.7;
            accomodity = "Hotel";
        }
    }else if (budget <= 1000){
        country = "Balkans";
        if (season == "summer"){
            accomodity = "Camp";
            moneyspent = budget * 0.4;
        }else if (season == "winter"){
            accomodity = "Hotel";
            moneyspent = budget * 0.8;
        }
    }else if (budget > 1000){
        country = "Europe";
        moneyspent = budget * 0.9;
        accomodity = "Hotel";
        if (season == "summer"){
        }else if (season == "winter"){
        }
    }console.log(`Somewhere in ${country}`)
    console.log(`${accomodity} - ${moneyspent.toFixed(2)}`)

}Journey([1500, "summer"])