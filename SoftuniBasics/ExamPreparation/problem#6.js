function problem6(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let hasEnded = false;
    let counting = 0;
    for (let k = K; k <= 8; k++) {
        for (let l = 9; l >= L; l--) {
            for (let m = M; m <= 8; m++) {
                for (let n = 9; n >= N; n--) {
                    let isValid = false;
                    if (k % 2 === 0 && l % 2 !== 0 && m % 2 === 0 && n % 2 !== 0){
                        isValid = true;
                    }
                    let firstNum = k * 10 + l;
                    let secondNum = m * 10 + n;
                    if (isValid && firstNum == secondNum) {
                        console.log("Cannot change the same player.");
                    } else if (isValid && firstNum != secondNum) {
                        console.log(`${k}${l} - ${m}${n}`);
                        counting++
                    } if (counting >= 6) {
                        hasEnded = true;
                    }if (hasEnded)
                    {
                        break;
                    }

                }if (hasEnded)
                {
                    break;
                } 
            }if (hasEnded)
            {
                break;
            } 
        }if (hasEnded)
        {
            break;
        } 
    }

} problem6(["7",
"6",
"8",
"5"])