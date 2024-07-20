var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else if (userNumber > secret) {
    console.log("Too high!");
  }
};

// Testing the guess function with different numbers
guess(2); // Outputs: "Too high!"
guess(8); // Outputs: "Well done!"
guess(10); // Outputs: "Too high!"
