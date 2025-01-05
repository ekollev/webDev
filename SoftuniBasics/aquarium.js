function aquarium(input){
  let lenghtcm = Number(input[0]);
  let widthcm = Number(input[1]);
  let heightcm = Number(input[2]);
  let percent = Number(input[3])* 0.01;
  let aquariumsize = (lenghtcm * widthcm * heightcm) * 0.001;
  let litresneeded = aquariumsize * (1 - percent)
  console.log(litresneeded)
}aquarium([85, 75, 47, 17])