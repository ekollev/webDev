function problem2(input){
   let tShirtPrice = Number(input[0]);
   let sumRequiredtoWinBall = Number(input[1]);
   let shortsPrice = tShirtPrice * 0.75;
   let socksPrice = shortsPrice * 0.20;
   let footbalShoesPrice = (tShirtPrice + shortsPrice) * 2;
   let Sum = tShirtPrice + shortsPrice + socksPrice + footbalShoesPrice;
   let finalsum = Sum - (Sum * 0.15);
   if (finalsum >= sumRequiredtoWinBall){
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${finalsum.toFixed(2)} lv.`);
   }else{
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(`He needs ${Math.abs(finalsum - sumRequiredtoWinBall).toFixed(2)} lv. more.`);
   }
}problem2(["55", "310"])