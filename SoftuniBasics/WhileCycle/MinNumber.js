function MinNumber(input){
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;
    while ("Stop" !== input[index]){
        let value = Number(input[index]);
        if (value < min){
            min = value;
        }index++
        
    }console.log(min)
}MinNumber(["45", "-20", "7", "99", "Stop"])