function OnTime(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let timeExam = examHour * 60 + examMinute;
    let timeArrive = arrivalHour * 60 + arrivalMinute;
    if (timeArrive > timeExam){
        console.log("Late")
        let diff = Math.abs(timeArrive - timeExam);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0){
            if (m < 10){
                console.log(`${h}:0${m} hours after the start`);
            }else{
                console.log(`${h}:${m} hours after the start`);
            }
        }else{
            console.log((`${m} minutes after the start`))
        }
         }else if (timeArrive <= timeExam && timeExam - timeArrive <= 30){
            let diff = Math.abs(timeArrive - timeExam);
        console.log("On time")
        if (diff > 0){
            console.log(`${diff} minutes before the start`)
        }
    }else{
        let diff = Math.abs(timeArrive - timeExam);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        console.log("Early")
        if (h > 0){
            if (m < 10){
                console.log(`${h}:0${m} hours before the start`);
            }else{
                console.log(`${h}:${m} hours before the start`);
            }
        }else{
            console.log((`${m} minutes before the start`))
        }
        
    }
    
}OnTime (["11", "00", "8", "57"])
//Студент трябва да отиде на изпит в определен час (например в 9:30 часа). 
//Той идва в изпитната зала в даден час на пристигане (например 9:40). 
//Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това.
// Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е дошъл след часа на изпита, той е закъснял. 
//Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме,
// дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.





