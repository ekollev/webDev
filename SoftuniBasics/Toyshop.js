function Toyshop(input){
    let excursionPrice = Number(input[0]);
    let countPuzzle = Number(input[1]);
    let countSpeakingDoll = Number(input[2]);
    let countFluffyBear = Number(input[3]);
    let countMinion = Number(input[4]);
    let countTruck = Number(input[5]);
    let orderedToys = countPuzzle + countSpeakingDoll + countFluffyBear + countMinion + countTruck;
    let finalprice = countPuzzle * 2.6 + countSpeakingDoll * 3 + countFluffyBear * 4.1 + countMinion * 8.2 + countTruck * 2;
    if (orderedToys >= 50){
    finalprice = finalprice - (finalprice * 0.25);
    }
    finalprice = finalprice - (finalprice * 0.1);
    if (excursionPrice <= finalprice){
        console.log(`Yes! ${(finalprice - excursionPrice).toFixed(2)} lv left.`)
    }else {
        console.log(`Not enough money! ${(excursionPrice - finalprice).toFixed(2)} lv needed.`)
    }

}Toyshop([320, 8, 2, 5, 5, 1])