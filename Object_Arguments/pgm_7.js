var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

// Function to convert a string to uppercase
var getBig = function (str) {
    return str.toUpperCase();
};

// Function to convert a string to lowercase
var getSmall = function (str) {
    return str.toLowerCase();
};

var smallPlanet = planet.toLowerCase();
console.log(planet + " becomes " + smallPlanet);

// Testing the getBig function
console.log(getBig("Saturn")); // "SATURN"
console.log(getBig("earth")); // "EARTH"

// Testing the getSmall function
console.log(getSmall("Mars")); // "mars"
console.log(getSmall("VENUS")); // "venus"
