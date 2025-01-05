function Exam(input) {
  let index = 0;
  let badGradesAllowed = Number(input[index]);
  index++
  let gradeCounter = 0;
  badgrade = 0;
  let averageScore = 0;
  let failedtoPass = false;
  while ("Enough" != input[index]) {
    taskName = input[index];
    index++
    gradeCounter++
    grade = Number(input[index]);
    averageScore += grade;

    if (grade <= 4) {
      badgrade++
      if (badgrade >= badGradesAllowed) {
        console.log(`You need a break, ${badgrade} poor grades.`);
        failedtoPass = true;
        break;
      }
    } index++
  }if (failedtoPass === false){
    console.log(`Average score: ${(averageScore / gradeCounter).toFixed(2)}`);
  console.log(`Number of problems: ${gradeCounter}`);
  console.log(`Last problem: ${input[index - 2]}`);
}

} Exam(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])