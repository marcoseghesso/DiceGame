const dice1 = document.getElementById("img1");
const dice2 = document.getElementById("img2");

let randomNum1 = randomNumGenerator(6); 
let randomNum2 = randomNumGenerator(6);

function randomNumGenerator(max){
   return Math.floor((Math.random() * max)+1)
}

dice1.src = `./images/dice${randomNum1}.png`;
dice2.src = `./images/dice${randomNum2}.png`;

