var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var one = "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", one);

// if(randomNumber1 === 1){
//     document.querySelector(".img1").setAttribute("src", "dice1.png");
// } else if(randomNumber1 === 2){
//     document.querySelector(".img1").setAttribute("src", "dice2.png");
// } else if(randomNumber1 === 3){
//     document.querySelector(".img1").setAttribute("src", "dice3.png");
// } else if(randomNumber1 === 4){
//     document.querySelector(".img1").setAttribute("src", "dice4.png");
// } else if(randomNumber1 === 5){
//     document.querySelector(".img1").setAttribute("src", "dice5.png");
// } else if(randomNumber1 === 6) {
//     document.querySelector(".img1").setAttribute("src", "dice6.png");
// }

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var two = "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", two);

// if(randomNumber2 === 1){
//     document.querySelector(".img2").setAttribute("src", "dice1.png");
// } else if(randomNumber2 === 2){
//     document.querySelector(".img2").setAttribute("src", "dice2.png");
// } else if(randomNumber2 === 3){
//     document.querySelector(".img2").setAttribute("src", "dice3.png");
// } else if(randomNumber2 === 4){
//     document.querySelector(".img2").setAttribute("src", "dice4.png");
// } else if(randomNumber2 === 5){
//     document.querySelector(".img2").setAttribute("src", "dice5.png");
// } else if(randomNumber2 === 6) {
//     document.querySelector(".img2").setAttribute("src", "dice6.png");
// }

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Match Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins.";
} else {
  document.querySelector("h1").innerText = "Player 2 wins.";
}
