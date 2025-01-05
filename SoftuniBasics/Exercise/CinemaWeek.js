function Cinema(input){
let movieName = String(input[0]);
let hallType = String(input[1]);
let boughtTickets = Number(input[2]);
ticketPrice = 0;
switch(movieName){
    case "A Star Is Born":
        if (hallType === "normal"){
            ticketPrice = 7.5;
        }else if (hallType === "luxury"){
            ticketPrice = 10.5;
        }else if (hallType === "ultra luxury"){
            ticketPrice = 13.5;
        }break;
        case "Bohemian Rhapsody":
            if (hallType === "normal"){
                ticketPrice = 7.35;
            }else if (hallType === "luxury"){
                ticketPrice = 9.45;
            }else if (hallType === "ultra luxury"){
                ticketPrice = 12.75;
            }break;
            case "Green Book":
                if (hallType === "normal"){
                    ticketPrice = 8.15;
                }else if (hallType === "luxury"){
                    ticketPrice = 10.25;
                }else if (hallType === "ultra luxury"){
                    ticketPrice = 13.25;
                }break;
            case "The Favourite":
                if (hallType === "normal"){
                    ticketPrice = 8.75;
                }else if (hallType === "luxury"){
                    ticketPrice = 11.55;
                }else if (hallType === "ultra luxury"){
                    ticketPrice = 13.95;
                }break;
}let income = boughtTickets * ticketPrice;
console.log(`${movieName} -> ${income.toFixed(2)} lv.`);


}Cinema(["The Favourite",
"ultra luxury",
"34"])
