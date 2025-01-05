function TouristShop(input){

 let index = 0;
 let budget = Number(input[0]);
 let totalprice = 0;
 let productPrice = 0;
 let productsBought = 0;
 index++

 while (input[index] !== "Stop"){
  
productName = String(input[index++]);
productPrice = Number(input[index++]);
  if (((productsBought + 1) % 3) === 0){

    productPrice = productPrice / 2;
  }

totalprice += productPrice;
budget = budget - productPrice;
  
  if (budget <= 0){
    break;
  }
productsBought++
 }//while cycle ends.

 if (budget <= 0){
 console.log("You don't have enough money!");
 console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
 }
 
 else{
    console.log(`You bought ${productsBought} products for ${totalprice.toFixed(2)} leva.`)
 }

}TouristShop(["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"])


