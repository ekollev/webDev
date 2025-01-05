function Shopping(input) {
    let budget = Number(input[0]);
    let graphicCards = Number(input[1]);
    let cores = Number(input[2]);
    let ram = Number(input[3]);
    let graphicCardPrice = graphicCards * 250;
    let coresPrice = cores * (graphicCardPrice * 0.35);
    let ramPrice = ram * (graphicCardPrice * 0.1);
    let finalprice = graphicCardPrice + coresPrice + ramPrice;
    if (graphicCards > cores) {
        finalprice = finalprice - (finalprice * 0.15);
    } if (budget >= finalprice) {
        console.log(`You have ${(budget - finalprice).toFixed(2)} leva left!`)
    } else{
        console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva more!`)
    }
}