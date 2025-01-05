function Workinghours(input) {
    let time = Number(input[0]);
    let day = String(input[1]);
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time >= 10 && time < 18) {
                console.log("open")
            } else {
                console.log("closed")
            }
            break;
        case "Sunday":
            console.log("closed")
            break;
    }

}

Workinghours([10, "Monday"])