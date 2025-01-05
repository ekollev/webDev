function AreaofFigures(input){
    let type = String(input[0]);
    switch (type){
        case "square":
            let lenght = Number(input[1]);
            let result = lenght * lenght;
            console.log(result.toFixed(3))
            break;
        case "rectangle":
            let lenght1 = Number(input[1]);
            let lenght2 = Number(input[2]);
            let result1 = lenght1 * lenght2;
            console.log(result1.toFixed(3))
            break;
        case "circle":
            let radius = Number(input[1]);
            let result2 = Math.PI * (radius * radius);
            console.log(result2.toFixed(3))
            break;
        case "triangle":
            let lenght3 = Number(input[1]);
            let height = Number(input[2]);
            let result3 = (lenght3 * height) / 2;
            console.log(result3.toFixed(3))
            break;

    }
    

}