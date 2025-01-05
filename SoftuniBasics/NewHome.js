function NewHome(input) {
    let flowertype = String(input[0]);
    let flowercount = Number(input[1]);
    let budget = Number(input[2]);
    let finalprice = 0;
    let change = 0;
    switch (flowertype) {
        case "Roses":
            finalprice = flowercount * 5;
            if (flowercount > 80) {
                finalprice = finalprice - (finalprice * 0.1);
            } break;
        case "Dahlias":
            finalprice = flowercount * 3.8;
            if (flowercount > 90) {
                finalprice = finalprice - (finalprice * 0.15);
            } break;
        case "Tulips":
            finalprice = flowercount * 2.8;
            if (flowercount > 80) {
                finalprice = finalprice - (finalprice * 0.15)
            } break;
        case "Narcissus":
            finalprice = flowercount * 3;
            if (flowercount < 120) {
                finalprice = finalprice + (finalprice * 0.15);
            } break;
        case "Gladiolus":
            finalprice = flowercount * 2.5;
            if (flowercount < 80) {
                finalprice = finalprice + (finalprice * 0.2);
            } break;

    }if (budget >= finalprice) {
        change = budget - finalprice;
        console.log(`Hey, you have a great garden with ${flowercount} ${flowertype} and ${(change.toFixed(2))} leva left.`)
    } else if (budget < finalprice) {
        change = finalprice - budget;
        console.log(`Not enough money, you need ${(change.toFixed(2))} leva more.`)

    }

} NewHome(["Narcissus", 119, 360])
//Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left.
//· Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
//Сумата да бъде форматирана до втория знак след десетичната запетая.