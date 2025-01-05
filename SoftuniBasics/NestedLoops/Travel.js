function Travel(input){
  let index = 0;
  let command = input[index];
  index++
  while ("End" !== command){
      let destination = command;
      let budget = input[index];
      index++
      let sum = 0;
      while (sum < budget){
        let money = Number(input[index]);
        index++
        sum += money;
      }console.log(`Going to ${destination}!`)
      command = input[index];
      index++
  }
}Travel(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])