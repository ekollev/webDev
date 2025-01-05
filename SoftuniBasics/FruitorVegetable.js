function FruitorVegetable(input) {
    let foodType = String(input[0]);
    switch (foodType) {
        case "banana":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            case "apple":
            console.log("fruit")
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable")
            break;
        default:
            console.log("unknown")
    }
} FruitorVegetable([`lemon`])