function SwimmingRecord(input){
    let recordinSeconds = Number(input[0]);
    let metresofDistance = Number(input[1]);
    let timefor1Meter = Number(input[2]);
    let totalSecs = metresofDistance * timefor1Meter;
    let delay = Math.floor(metresofDistance / 15) * 12.5;
    let totalTime = totalSecs + delay;
    if (totalTime < recordinSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime.toFixed(2))} seconds.`)
    }else {
        console.log(`No, he failed! He was ${((totalTime - recordinSeconds).toFixed(2))} seconds slower.`)
    }
}
