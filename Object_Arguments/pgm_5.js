var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(7, 7); // Trying out different arguments

showLarger(12, 3);
showLarger(-10, 3);
showLarger(7, 7); // Trying out different arguments

showSmallest(12, 3, 5);
showSmallest(-10, 3, -20);
showSmallest(7, 7, 7); // Trying out different arguments
