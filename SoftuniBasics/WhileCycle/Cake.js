function Cake(input) {
   let index = 0;
   let width = Number(input[index]);
   index++
   let length = Number(input[index]);
   index++
   let cakesize = width * length;
   let cakePiece = input[index];
   while ("STOP" != input[index]){
      cakePiece = input[index];
      cakesize -= Number(cakePiece);
      if (cakesize <= 0){
         console.log(`No more cake left! You need ${Math.abs(cakesize)} pieces more.`);
         break;
      }
     index++
   }if (cakesize > 0){
      console.log(`${cakesize} pieces are left.`);
   }

   } Cake(["10",

   "10",
   
   "20",
   
   "20","20", "20", "21"])
//Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. 
//Той обаче не знае колко парчета могат да си вземат гостите от нея. Вашата задача е да напишете функция, 
//която изчислява броя на парчетата, които гостите са взели, преди тя да свърши. 
//Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000]) и след това на всеки ред,
// до получаване на командата "STOP" или докато не свърши тортата, броят на парчетата, които гостите вземат от нея.
//bележка: Едно парче торта е с размер 1х1 см.
//а се отпечата на конзолата един от следните редове:
//"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
// "No more cake left! You need {брой недостигащи парчета} pieces more."