function Comissions(input){
    let town = String(input[0]);
    let salesCount = Number(input[1]);
    switch (town){
        case "Sofia":
            if (salesCount >= 0 && salesCount <= 500){
                console.log((salesCount * 0.05).toFixed(2));
            }else if (salesCount >= 500 && salesCount <= 1000){
                console.log((salesCount * 0.07).toFixed(2));
            }else if (salesCount >= 1000 && salesCount <= 10000){
                console.log((salesCount * 0.08).toFixed(2));
            }else if(salesCount > 10000){
                console.log((salesCount * 0.12).toFixed(2));
            }else {
                console.log("error")
            }break;
            case "Varna":
                if (salesCount >= 0 && salesCount <= 500){
                    console.log((salesCount * 0.045).toFixed(2));
                }else if (salesCount >= 500 && salesCount <= 1000){
                    console.log((salesCount * 0.075).toFixed(2));
                }else if (salesCount >= 1000 && salesCount <= 10000){
                    console.log((salesCount * 0.1).toFixed(2));
                }else if(salesCount > 10000){
                    console.log((salesCount * 0.13).toFixed(2));
                }else {
                    console.log("error")
                }break;
            case "Plovdiv":
                if (salesCount >= 0 && salesCount <= 500){
                    console.log((salesCount * 0.055).toFixed(2));
                }else if (salesCount >= 500 && salesCount <= 1000){
                    console.log((salesCount * 0.08).toFixed(2));
                }else if (salesCount >= 1000 && salesCount <= 10000){
                    console.log((salesCount * 0.12).toFixed(2));
                }else if(salesCount > 10000){
                    console.log((salesCount * 0.145).toFixed(2));
                }else {
                    console.log("error")
                }break;
                default:
                    console.log("error")


    }
}Comissions (["Plovdiv", -50])