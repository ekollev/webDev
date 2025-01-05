function Cinema(input){
    let projectingType = String(input[0]);
    let rows = Number(input[1]);
    let colonies = Number(input[2]);
    switch (projectingType){
        case "Premiere":
            console.log(`${(rows * colonies * 12).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${(rows * colonies * 7.5).toFixed(2)} leva`);
            break;
        case "Discount":
            console.log(`${(rows * colonies * 5).toFixed(2)} leva`);
            break;
    }
}Cinema(["Normal", 21, 13])