const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. forEach to console.log each country
countries.forEach(country => console.log(country));

// 4. forEach to console.log each name
names.forEach(name => console.log(name));

// 5. forEach to console.log each number
numbers.forEach(number => console.log(number));

// 6. map to create a new array with countries in uppercase
const countriesUppercase = countries.map(country => country.toUpperCase());
console.log(countriesUppercase);

// 7. map to create an array of countries lengths
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. map to create a new array with squared numbers
const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers);

// 9. map to change each name to uppercase
const namesUppercase = names.map(name => name.toUpperCase());
console.log(namesUppercase);


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  // 10. map to create an array of prices
  const prices = products.map(product => product.price);
  console.log(prices);
  
  // 11. filter to filter out countries containing 'land'
  const countriesWithLand = countries.filter(country => country.includes('land'));
  console.log(countriesWithLand);
  
  // 12. filter to filter out countries with six characters
  const countriesWithSixChars = countries.filter(country => country.length === 6);
  console.log(countriesWithSixChars);
  
  // 13. filter to filter out countries with six or more characters
  const countriesWithSixOrMoreChars = countries.filter(country => country.length >= 6);
  console.log(countriesWithSixOrMoreChars);
  
  // 14. filter to filter out countries starting with 'E'
  const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
  console.log(countriesStartingWithE);
  
  // 15. filter to filter out only prices with valid values
  const validPrices = products.filter(product => typeof product.price === 'number' && !isNaN(product.price));
  console.log(validPrices);

  
  // 16. function to filter out string items
const getStringLists = arr => arr.filter(item => typeof item === 'string');

// Example usage:
const mixedArray = ['apple', 3, 'banana', 5, 'orange'];
console.log(getStringLists(mixedArray)); // Output: ['apple', 'banana', 'orange']


// 17. reduce to sum all numbers
const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumNumbers);

// 18. reduce to concatenate countries into a sentence
const countriesSentence = countries.reduce((acc, curr, index, array) => {
  if (index === array.length - 1) {
    return acc + 'and ' + curr;
  }
  return acc + curr + ', ';
}, '');
console.log(`${countriesSentence} are north European countries.`);


// 19. some to check if some names' length > 7
const isSomeLongNames = names.some(name => name.length > 7);
console.log('Some names\' length greater than seven:', isSomeLongNames);

// 20. every to check if all countries contain 'land'
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log('All countries contain "land":', allCountriesContainLand);

// 22. find to find first country with six letters
const countryWithSixLetters = countries.find(country => country.length === 6);
console.log('First country with six letters:', countryWithSixLetters);

// 23. findIndex to find position of first country with six letters
const indexCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log('Position of first country with six letters:', indexCountryWithSixLetters);

// 24. findIndex to find position of Norway (returns -1 if not found)
const indexNorway = countries.findIndex(country => country === 'Norway');
console.log('Position of Norway:', indexNorway);

// 25. findIndex to find position of Russia (returns -1 if not found)
const indexRussia = countries.findIndex(country => country === 'Russia');
console.log('Position of Russia:', indexRussia);
