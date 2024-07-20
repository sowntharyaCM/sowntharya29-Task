var message = "We choose to go to the Moon!";

// Logging specific parts of the message
console.log(message.substr(21, 5)); // "Moon!"
console.log(message.substr(14, 9)); // "go to the"
console.log(message.substr(0, 9));  // "We choose"

// Investigating what happens if the second argument is omitted
console.log(message.substr(21)); // "Moon!"
console.log(message.substr(14)); // "go to the Moon!"
console.log(message.substr(0));  // "We choose to go to the Moon!"

// Investigating the use of negative numbers as arguments
console.log(message.substr(-5));  // "Moon!" (start from the 5th character from the end)
console.log(message.substr(14, -1)); // "" (negative length is treated as 0, so returns an empty string)
console.log(message.substr(-10, 3)); // "the" (start from the 10th character from the end and get 3 characters)

