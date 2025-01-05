function schoolMaterials(input){
    let pens = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let litri = Number(input[2]) * 1.2;
    let percentDiscount = Number(input[3]) * 0.01;
    let sum = pens + markers + litri;
    let pricewithDiscount = sum - (sum * percentDiscount);
    console.log(pricewithDiscount)
}schoolMaterials([4, 2, 5, 13])