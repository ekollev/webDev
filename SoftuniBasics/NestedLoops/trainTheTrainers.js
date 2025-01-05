function train(input){
    let index = 1;
    let juryCount = input[0];
    let gradeSum = 0;
    gradecounter = 0;
    let averagegradeCounter = 0;
    let command = input[index];
    let finalGrade = 0;
    while ("Finish" !== command){
      let taskType = (input[index]);
      index++
      
      for (let i = 0; i < juryCount;i++){
        grade = Number(input[index]);
        index++
        gradecounter++
         gradeSum += grade;
      }
      averagegradeCounter++
      let averagegrade = gradeSum / gradecounter;
      finalGrade += averagegrade;
      console.log(`${taskType} - ${averagegrade.toFixed(2)}.`);
      gradeSum = 0;
      gradecounter = 0;
    command = input[index];
    }
    console.log(`Student's final assessment is ${(finalGrade / averagegradeCounter).toFixed(2)}.`);






}train(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])