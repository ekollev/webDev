function basketball(input){
    let yearlyprice = Number(input[0]);
    let kecove = yearlyprice - (yearlyprice * 0.4);
    let ekipi = kecove - (kecove * 0.2);
    let topki = ekipi / 4;
    let aksesoari = topki / 5;
    let obshto = yearlyprice + kecove + ekipi + topki + aksesoari;
    console.log(obshto);
}basketball ([550])