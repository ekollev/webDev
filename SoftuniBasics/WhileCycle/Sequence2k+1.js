function Sequence(input){
    let n = Number(input[0]);
    let index = 0;
    let res = 0;
    while (res <= n){
       res = res * 2 + 1;
       if (res > n){
        break;
       }
       console.log(res)
    }
}Sequence(["17"])