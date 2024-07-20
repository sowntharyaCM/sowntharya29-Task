var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else if (userNumber !== secret) {
    console.log("Unlucky, try again.");
  }
};

// Testing the guess function with different numbers
guess(2); // Outputs: "Unlucky, try again."
guess(8); // Outputs: "Well done!"
guess(10); // Outputs: "Unlucky, try again."
