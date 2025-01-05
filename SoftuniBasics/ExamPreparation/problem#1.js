function problem1(input){
    let peopleCount = Number(input[0]);
    let sleepsCount = Number(input[1]);
    let transportCardCount = Number(input[2]);
    let museumticketCount = Number(input[3]);
    let sleepPrice = 20;
    let transportCard = 1.6;
    let museumTicket = 6;
    let totalSum = 0;
    let sumfor1Person = 0;
    sumfor1Person = sleepsCount * sleepPrice + transportCardCount * transportCard + museumticketCount * museumTicket;
    let sumfortheWholeGroup = sumfor1Person * peopleCount;
    totalSum = sumfortheWholeGroup + (sumfortheWholeGroup * 0.25)
    console.log(totalSum.toFixed(2))
    

}problem1(["131",
    "9",
    "33",
    "46"
    ])