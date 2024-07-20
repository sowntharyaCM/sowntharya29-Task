var point1;
var point2;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

// Function to reflect a point in the x-axis
reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

// Function to rotate a point 90 degrees anticlockwise around (0, 0)
rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point1 = { x: 2, y: 5 };

// Move point1 by a different amount
point2 = move(point1, { x: 3, y: -4 });

showPoint(point1);
console.log("Move 3 across and 4 down");
showPoint(point2);

// Reflect point1 in the x-axis
var reflectedPoint = reflectX(point1);
console.log("Reflect in the x-axis");
showPoint(reflectedPoint);

// Rotate point1 90 degrees anticlockwise
var rotatedPoint = rotate90(point1);
console.log("Rotate 90 degrees anticlockwise");
showPoint(rotatedPoint);
