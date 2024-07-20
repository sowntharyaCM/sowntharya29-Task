var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3)); // "Moo"

// 1. Use indexOf to find the index of where the word 'go' starts in the message string
var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index: " + goIndex); // 13

// 2. Use indexOf and substr to display the word 'choose' from the message string
var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6)); // "choose"

// 3. Use lastIndexOf to find the index of the 'oo' in the word 'Moon' of the message string
var ooIndex = message.lastIndexOf("oo");
console.log("The 'oo' in 'Moon' starts at index: " + ooIndex); // 25
