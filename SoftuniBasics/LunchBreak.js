function LunchBreak(input){
    let seriesName = (input[0]);
    let episodeLenght = Number(input[1]);
    let breakLenght = Number(input[2]);
    let timeLeft = breakLenght - (breakLenght / 8) - (breakLenght / 4);
    if (timeLeft >= episodeLenght){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeLenght)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLenght - timeLeft)} more minutes.`)
    }
}
