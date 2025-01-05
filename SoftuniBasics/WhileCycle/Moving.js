function Moving(input){
    let index = 3;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let boxesToMove = input[index];
    let allspace = width * length * height;
    while (allspace > 0){
        boxesToMove = input[index];
        if ("Done" === boxesToMove){
            break;
        }
         allspace -= Number(boxesToMove);
        
        index++
    }if (allspace <= 0){
        console.log(`No more free space! You need ${Math.abs(allspace)} Cubic meters more.`);
    }
    if (allspace > 0){
         console.log(`${allspace} Cubic meters left.`);
    }
}Moving(["10",

"10",

"2","20", "20", "20", "20", "122"])