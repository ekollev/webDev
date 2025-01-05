function sumofNumbers(input){
    let n = input[0];
    let text = "" + n;
    let sum = 0;
    for (let i = 0; i < text.length; i++){
    sum += Number(text[i]);
   
    }

        console.log(`The sum of the digits is:${sum}`)
    
}sumofNumbers(["12345"])