var getGuesser = function () {
    var secret = 8;
  
    return function (userNumber) {
      if (userNumber === secret) {
        console.log("Well done!");
      } else {
        console.log("Unlucky, try again.");
      }
    };
  };
  
var guess = getGuesser();

// Further Adventures:
// Follow the steps mentioned in the comments to explore the behavior.

// Step 1: Run the program. The getGuesser and guess variables are added to the global scope.

// Step 2: At the prompt, type 'getGuesser' and press Enter. 
// You'll see that the value of getGuesser is a function definition.

// Step 3: At the prompt, type 'guess' and press Enter.
// The value of guess is displayed, which is also a function definition.

// Step 4: At the prompt, type 'secret' and press Enter.
// You'll see that 'secret' is not defined, as it is local to the getGuesser function and not accessible globally.

// Example usage:
guess(2); // Outputs: "Unlucky, try again."
guess(8); // Outputs: "Well done!"
guess(10); // Outputs: "Unlucky, try again."
