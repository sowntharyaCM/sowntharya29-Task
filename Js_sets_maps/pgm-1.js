// Create an empty set
const emptySet = new Set();

// Create a set containing numbers 0 to 10 using a loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}

// Remove an element from a set
numberSet.delete(5); // Removes the number 5 from the set

// Clear a set
numberSet.clear(); // Clears all elements from the set

// Create a set of 5 string elements from an array
const stringArray = ['apple', 'banana', 'orange', 'apple', 'pear'];
const stringSet = new Set(stringArray);

// Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway'];
const countryMap = new Map();

countries.forEach(country => {
    countryMap.set(country, country.length);
});

// Output the results for demonstration
console.log("Empty Set:", emptySet);
console.log("Number Set:", numberSet);
console.log("String Set:", stringSet);
console.log("Country Map:", countryMap);
