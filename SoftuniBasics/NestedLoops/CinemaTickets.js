function cinema(input){
    //variables/counters.
    let studentCounter = 0;
    let totalticketsCounter = 0;
    let kidCounter = 0;
    let standardCounter = 0;
    let index = 0;
    let command = input[index];
//cycles.
    while ("Finish" !== command){
        command = input[index];
        let moviename = command;
        index++
        let freeSeats = Number(input[index]);
        index++
        let ticketType = input[index];
        let totaltickets = 0;
       while (ticketType !== "End"){
        totaltickets++
        switch (ticketType){
            case "student":
                studentCounter++
                break;
                case "standard":
                    standardCounter++
                    break;
                    case "kid":
                        kidCounter++
                        break;

        }if (totaltickets >= freeSeats){
            break;
        }index++
        ticketType = input[index];
        

       }
       console.log(`${moviename} - ${(totaltickets / freeSeats * 100).toFixed(2)}% full.`)
       totalticketsCounter += totaltickets; 
       index++
       command = input[index];

    } 
    console.log(`Total tickets: ${totalticketsCounter}`);
    console.log(`${(studentCounter / totalticketsCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalticketsCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalticketsCounter * 100).toFixed(2)}% kids tickets.`);
    





}cinema(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])