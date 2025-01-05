function architect (input){
    let squaremeters = input[0];
    let price = squaremeters * 7.61;
    let discount = price * 0.18;
    let finalprice = price - discount
    console.log(`The final price is: ${finalprice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
architect([150])