function SkiTrip(input) {
    let days = Number(input[0]);
    let typeRoom = String(input[1]);
    let rate = String(input[2]);
    let nights = days - 1;
    let price = 0;
    if (typeRoom == "apartment"){
        price = nights * 25;
        if (nights < 10) {
            price = price - (price * 0.3);
        } else if (nights >= 10 && nights <= 15) {
            price = price - (price * 0.35);
        } else {
            price = price - (price * 0.5);
        }
    }else if (typeRoom == "president apartment") {
        price = nights * 35;
        if (nights < 10) {
            price = price - (price * 0.1);
        } else if (nights >= 10 && nights <= 15) {
            price = price - (price * 0.15);
        } else {
            price = price - (price * 0.2);
        }
    }else if (typeRoom == "room for one person") {
        price = nights * 18;
    }if (rate === "positive") {
        price = price + (price * 0.25);
    }else if (rate === "negative"){
        price = price - (price * 0.1);
    } console.log(price.toFixed(2));
} 
SkiTrip(["2", "apartment", "positive"])