const dice1 = document.getElementById("img1");
const dice2 = document.getElementById("img2");
const result = document.querySelector("h1");

let randomNum1 = randomNumGenerator(6); 
let randomNum2 = randomNumGenerator(6);

function randomNumGenerator(max){
   return Math.floor((Math.random() * max)+1)
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

dice1.src = `./images/dice${randomNum1}.png`;
dice2.src = `./images/dice${randomNum2}.png`;
displayResult(randomNum1, randomNum2);
