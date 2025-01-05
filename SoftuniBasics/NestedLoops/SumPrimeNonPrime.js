function sumPrime(input){
  let Prime = 0;
  let NonPrime = 0;
  let index = 0;

  while ("stop" !== input[index]){
     let currentNumber = Number(input[index]);
     if (currentNumber < 0){
      console.log("Number is negative.");
     }else {
      let isPrime = true;
      for (let i = 2; i < currentNumber; i++){
        if (currentNumber % i == 0){
            isPrime = false;
            break;
        }
      }
        if (isPrime){
          Prime += currentNumber;
        }else{
          NonPrime += currentNumber;
        }
      
    }  
    index++
  }


console.log(`Sum of all prime numbers is: ${Prime}`);
console.log(`Sum of all non prime numbers is: ${NonPrime}`);

}sumPrime(["3","9","0","7","19","4","stop"])