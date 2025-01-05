function Voucher(input){
    let voucherValue = Number(input[0]);
    let index = 0;
    index++
    let command = input[index];
    let movies = 0;
    let products = 0;
    while ("End" !== command){
        let currentindex = input[index];
        let price = 0;
        if (currentindex.length > 8){
            let letter1 = currentindex.charCodeAt(0);
            let letter2 = currentindex.charCodeAt(1);
            price = letter1 + letter2;
            movies++
        }else if (currentindex.length <= 8){
            price = currentindex.charCodeAt(0);
            products++
        }voucherValue -= price;
        if (voucherValue < 0){
            products--;
            console.log(movies);
            console.log(products);
            break;
        }else if (voucherValue === 0){
            console.log(movies);
            console.log(products);
            break;
        }
        index++
        command = input[index];

    }if(voucherValue > 0){
    console.log(movies);
    console.log(products);
    }
}Voucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])