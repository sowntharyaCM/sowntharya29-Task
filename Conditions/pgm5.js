var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        if (userNumber < secret) {
          return "Too low!";
        } else {
          return "Too high!";
        }
      }
    };
  };
  
var guess = getGuesser();

// Testing the game
console.log(guess(5)); // Example guess

// Further Adventures:

// Step 3: Update the second condition to (userNumber < secret)
// This swaps the logic to check if the user's guess is lower than the secret number.
// Update the messages accordingly:
// - "Too low!" for when the guess is lower than the secret.
// - "Too high!" for when the guess is higher than the secret.

// Step 5: Swap the first and second conditions so the second condition uses the strict equality operator.
// This changes the logic to first check if the guess is not equal to the secret.
// Update the messages accordingly:
// - "Well done!" for when the guess is correct.
// - "Too high!" for when the guess is higher than the secret.
// - "Too low!" for when the guess is lower than the secret.
