const button = document.querySelector(".rollBtn");
const inputElement1 = document.querySelector(".textBox1");
const button1 = document.querySelector(".btnBox1");
const button2 = document.querySelector(".btnBox2");
const inputElement2 = document.querySelector(".textBox2");
const output1 = document.querySelector(".output1")
const output2 = document.querySelector(".output2");
let inputValue1 = "";
let inputValue2 = "";

button1.addEventListener("click", function assignNames() {
    inputValue1 = inputElement1.value;
    inputElement1.style.visibility = "hidden";
    button1.style.visibility = "hidden";
    output1.textContent = inputValue1;
});
button2.addEventListener("click", function assignNames1() {
    inputValue2 = inputElement2.value;
    inputElement2.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    output2.textContent = inputValue2;
});

function rollTheDice(){
var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").src = (`./images/dice${randomNumber1}.png`);
var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").src = (`./images/dice${randomNumber2}.png`);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 " +  inputValue1 + " wins!";
}if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = inputValue2 + " wins!🚩";
}if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
}
button.addEventListener("click", rollTheDice);
// Add an event listener to detect device motion
window.addEventListener('devicemotion', function(event) {
    // Get the acceleration values
    const accelerationX = event.acceleration.x;
    const   accelerationY = event.acceleration.y;
    const accelerationZ = event.acceleration.z;
  
    // Calculate the overall acceleration
    const accelerationMagnitude = Math.sqrt(
      accelerationX ** 2 + accelerationY ** 2 + accelerationZ ** 2
    );
  
    // Define a threshold for shake detection
    const shakeThreshold = 3; // You can adjust this value
  
    // If the acceleration exceeds the threshold, roll the dice
    if (accelerationMagnitude > shakeThreshold) {
      rollTheDice(); // Call your dice rolling function here
    }
  });
  