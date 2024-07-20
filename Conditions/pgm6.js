var getGuesser = function (range) {
    var secret = Math.floor(Math.random() * range + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else if (userNumber > secret) {
        return "Too high!";
      } else {
        return "Too low!";
      }
    };
  };
  
var guess = getGuesser(10); // Adjust the range here

// Testing the game
console.log(guess(5)); // Example guess

// Further Adventures:

// Step 5: Add a second parameter 'offset' and update to choose random numbers >= offset.
// Update getGuesser function definition and usage:
// 1. Add 'offset' parameter to the getGuesser function definition.
// 2. Update the random number generation to start from 'offset' and up to 'range'.
// 3. Adjust the guess function call to include both 'range' and 'offset'.

// Example: getGuesser(20, 10) generates numbers from 10 to 20.

