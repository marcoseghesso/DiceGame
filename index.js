const dice1 = document.getElementById("img1");
const dice2 = document.getElementById("img2");
const roll = document.getElementById("roll");
const result = document.querySelector("h1");

let randomNum1; 
let randomNum2;

function randomNumGenerator(){
   randomNum1 = Math.floor((Math.random() * 6)+1);
   randomNum2 = Math.floor((Math.random() * 6)+1);
   updateDice();
   return
}

function updateDice(){
   dice1.src = `./images/dice${randomNum1}.png`;
   dice2.src = `./images/dice${randomNum2}.png`;
}

function displayResult(num1, num2){
   if (num1 > num2){
      result.innerHTML = "Player 1 Won!!"
   } else if (num1 < num2){
      result.innerHTML = "Player 2 Won!!"
   } else {
      result.innerHTML = "Draw"
   }
}

function rollthedice (){
   randomNumGenerator();
   displayResult(randomNum1, randomNum2);
}

roll.addEventListener("click", rollthedice)

