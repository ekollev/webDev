function equalodd(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printline = "";
  for (let i = firstNum; i <= secondNum; i++){
    let currentNum = "" + i;
    let oddsum = 0;
    let evensum = 0;
    for(let j = 0; j <= currentNum.length; j++){
         let currentdigit = Number(currentNum.charAt(j));
         if (j % 2 === 0){
            evensum += currentdigit;
         }else {
            oddsum += currentdigit;
         }
    }
    if (oddsum === evensum){
        printline += `${i} `;
        
    }
  }console.log(printline);


}
equalodd(["100000",

"100050"])