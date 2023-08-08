// let myAge = 17;
// console.log(myAge);

// let myAge = 17;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoint = 50;

// bonusPoint = bonusPoint + 50;

// console.log(bonusPoint);

// bonusPoint = bonusPoint - 75;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 45;
// console.log(bonusPoint);

// function increment() {
//   console.log("fuck you");
// }

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// countdown();

// function theDev() {
//   console.log(42);
// }

// theDev();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function adDer() {
//   let total = lap1 + lap2 + lap3;
//   console.log(total);
// }

// adDer();

// function asDer() {
//   console.log(lap1 + lap2 + lap3);
// }

// let lapsCompleted = 0;

// function increase() {
//   lapsCompleted = lapsCompleted + 1;
// }

// increase();
// increase();
// increase();

// console.log(lapsCompleted);
// let username = "David";
// let message = "you have three new notifications";

// console.log(username + "," + message);

// let messageToUser = "You have three new notifications david !";

// console.log(messageToUser);

// let name = "David";
// let greeting = "My name is ";

// let myGreeting = greeting + " " + name;

// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let name = "Akinyoola David Aduragbemi";
// let greeting = "Welcome back";

// welcomeEl.innerText = greeting + " " + name;

// welcomeEl.innerText += ":)";
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);

let count = 0;

function increment() {
  count += 1;

  countEl.innerText = count;
  console.log(count);
}

function save() {
  let saver = count + " - ";
  saveEl.textContent += saver;
  console.log(saveEl.innerText);
  countEl.innerText = 0;
  count = 0;
}
