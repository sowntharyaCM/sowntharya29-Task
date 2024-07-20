const totalProductPrice = products
  .filter(product => typeof product.price === 'number' && !isNaN(product.price))
  .map(product => product.price)
  .reduce((acc, price) => acc + price, 0);

console.log('Total price of products:', totalProductPrice);


const sumOfPrices = products.reduce((acc, product) => {
  if (typeof product.price === 'number' && !isNaN(product.price)) {
    return acc + product.price;
  }
  return acc;
}, 0);

console.log('Sum of prices:', sumOfPrices);
const countStartingLetters = countries => {
    const letterCount = {};
    countries.forEach(country => {
      const firstLetter = country[0].toUpperCase();
      if (letterCount[firstLetter]) {
        letterCount[firstLetter]++;
      } else {
        letterCount[firstLetter] = 1;
      }
    });
  
    return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
  };
  
  // Example usage:
  console.log(countStartingLetters(countries));

  const getFirstTenCountries = countries => countries.slice(0, 10);

// Example usage:
console.log(getFirstTenCountries(countries));
const getLastTenCountries = countries => countries.slice(-10);

// Example usage:
console.log(getLastTenCountries(countries));
const mostUsedInitialLetter = countries => {
    const letterCount = {};
    countries.forEach(country => {
      const firstLetter = country[0].toUpperCase();
      if (letterCount[firstLetter]) {
        letterCount[firstLetter]++;
      } else {
        letterCount[firstLetter] = 1;
      }
    });
  
    let mostUsedLetter = '';
    let maxCount = 0;
    Object.entries(letterCount).forEach(([letter, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostUsedLetter = letter;
      }
    });
  
    return mostUsedLetter;
  };
  
  // Example usage:
  console.log('Most used initial letter:', mostUsedInitialLetter(countries));
  