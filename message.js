//The project will take a number between 0 and 100 and will tell you if it is a good number for you or a bad one

let x = Math.floor(Math.random() * 100);
let nume=["good","bad"];
console.log(`The number ${x} is ${nume[Math.floor(Math.random() * 2)]} for you.`);