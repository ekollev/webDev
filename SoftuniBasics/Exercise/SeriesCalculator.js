function SeriesCalculator(input){

  let name = String(input[0]);
  let seasons = Number(input[1]);
  let episodes = Number(input[2]);
  let episodeLength = Number(input[3]);
  episodeLength = episodeLength + (episodeLength * 0.2);
  let additionalTime = seasons * 10;
  let sum = seasons * episodes * episodeLength + additionalTime;
  
  console.log(`Total time needed to watch the ${name} series is ${sum} minutes.`);


//""'
}SeriesCalculator(["Lucifer",
"3",
"18","55"])