function HotelRoom(input){
    let month = String(input[0]);
    let nights = Number(input[1]);
    let studioprice = 0;
    let apartamentprice = 0;
    if (month == "May" || month == "October"){
        studioprice = 50;
        apartamentprice = 65;
        if (nights > 7 && nights <= 14){
            studioprice = studioprice - (studioprice * 0.05);
        }if (nights > 14){
            studioprice = studioprice - (studioprice * 0.3);
        }
    }if (month == "June" || month == "September"){
        studioprice = 75.2;
        apartamentprice = 68.7;
        if (nights > 14){
            studioprice = studioprice - (studioprice * 0.2)
        }
    }if (month == "July" || month == "August"){
        studioprice = 76;
        apartamentprice = 77;
    }if (nights > 14){
        apartamentprice = apartamentprice - (apartamentprice * 0.1)
    }
    console.log(`Apartment: ${(nights * apartamentprice).toFixed(2)} lv.`)
    console.log(`Studio: ${(nights * studioprice).toFixed(2)} lv.`)
}HotelRoom(["August", 20])