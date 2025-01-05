function MaxNumber(input){
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while ("Stop" !== input[index]){
      let value = Number(input[index]);
        if (value > max){
          max = value;
        }index++
        
    }console.log(max)
}MaxNumber(["-10", "20", "-30", "Stop"])
//Напишете функция, която до получаване на командата "Stop", чете цели числа и намира най-голямото измежду тях.
// Въвежда се по едно число на ред.