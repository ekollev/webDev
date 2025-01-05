function summerReading(input){
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let timeforReading = bookPages / pagesPerHour;
    let hourstoRead = timeforReading / days;
    console.log(hourstoRead)
}summerReading([432, 15, 4])