var getGuesser = function () {
    var secret = Math.floor(Math.random() * 21 + 30); // Random number between 30 and 50
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
  };
  
var guess = getGuesser();

// Testing the game
console.log(guess(35)); // Example guess

// Challenge: Create a function to generate a random number between two specified values
var between = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Testing the between function
console.log(between(1, 5));      // Example output: between 1 and 5
console.log(between(100, 200));  // Example output: between 100 and 200
