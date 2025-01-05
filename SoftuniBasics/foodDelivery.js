function foodDelivery(input){
    let chickenmenus = Number(input[0]) * 10.35;
    let fishmenus = Number(input[1]) * 12.4;
    let veggiemenus = Number(input[2]) * 8.15;
    let delivery = 2.5;
    let obshto = chickenmenus + fishmenus + veggiemenus;
    let desert = obshto * 0.2;
    let obshtasumazavsichko = obshto + delivery + desert;
    console.log(obshtasumazavsichko);
}foodDelivery([2, 4, 3])