function calculator(input){
    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let yearlypercent = Number(input[2]) * 0.01;
    let sum = depositSum + term * ((depositSum * yearlypercent) / 12);
    console.log(sum)
}calculator([200, 3, 5.7])