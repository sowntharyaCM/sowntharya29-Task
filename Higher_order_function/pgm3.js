// Assuming countries is an array of country objects with properties like name, capital, and population

// Sort countries by name
const sortCountriesByName = countries => {
    return countries.sort((a, b) => a.name.localeCompare(b.name));
  };
  
  // Sort countries by capital
  const sortCountriesByCapital = countries => {
    return countries.sort((a, b) => a.capital.localeCompare(b.capital));
  };
  
  // Sort countries by population
  const sortCountriesByPopulation = countries => {
    return countries.sort((a, b) => b.population - a.population);
  };

  // Assuming you have a function mostSpokenLanguages defined elsewhere that takes countries and count as parameters
// It returns an array of objects with country and count properties

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
// Assuming countries is an array of country objects with properties like name and population

const mostPopulatedCountries = (countries, count) => {
    return countries
      .sort((a, b) => b.population - a.population)
      .slice(0, count)
      .map(country => ({ country: country.name, population: country.population }));
  };
  
  console.log(mostPopulatedCountries(countries, 10));
  console.log(mostPopulatedCountries(countries, 3));
// Assuming countries is populated from your data source
// Example usage:
const sortedByName = sortCountriesByName(countries);
const sortedByCapital = sortCountriesByCapital(countries);
const sortedByPopulation = sortCountriesByPopulation(countries);

console.log(sortedByName);
console.log(sortedByCapital);
console.log(sortedByPopulation);

// Outputting most spoken languages and most populated countries
console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));

console.log(mostPopulatedCountries(countries, 10));
console.log(mostPopulatedCountries(countries, 3));
  