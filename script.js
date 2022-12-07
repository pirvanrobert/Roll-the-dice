let player1 = "Player 1";
let player2 = "Player 2";

const cube1 = document.querySelector('.cube-1');
const cube2 = document.querySelector('.cube-2');

let currentClass1 = ''
let currentClass2 = ''

function editNames() {
  player1 = prompt("Change Player1 name");
  player2 = prompt("Change player2 name");

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

function changeSide(value, cubeNr) {
  const showClass = 'show-' + value;
  const cube = cubeNr === 1 ? cube1 : cube2;
  let currentClass = cubeNr === 1 ? currentClass1 : currentClass2;
  
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);

  if (cubeNr === 1) {
    currentClass1 = showClass
  }
  else {
    currentClass2 = showClass
  }
}

function rollTheDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  changeSide(randomNumber1, 1)
  changeSide(randomNumber2, 2)

  document.querySelector(".img1").setAttribute("src",
    `Dices/dice${randomNumber1}.png`)
  document.querySelector(".img2").setAttribute("src",
    `Dices/dice${randomNumber2}.png`)

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML
      = (player2 + " WINS!");
  }
  else {
    document.querySelector("h1").innerHTML
      = (player1 + " WINS!");
  }
}


