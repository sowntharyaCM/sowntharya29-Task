const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Filter out cats with known weight in metric units
    const catsWithWeight = data.filter(cat => cat.weight.metric);

    // Calculate average weight
    if (catsWithWeight.length > 0) {
      const totalWeight = catsWithWeight.reduce((acc, cat) => {
        return acc + parseInt(cat.weight.metric.split(' - ')[0]);
      }, 0);
      const averageWeight = totalWeight / catsWithWeight.length;
      console.log(`Average weight of cats in metric units: ${averageWeight} grams`);
    } else {
      console.log('No data available for calculating average weight');
    }
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });



  const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Sort countries by area in descending order
    const sortedCountries = data.sort((a, b) => b.area - a.area);

    // Get top 10 largest countries
    const largestCountries = sortedCountries.slice(0, 10);

    console.log('Top 10 largest countries by area:');
    largestCountries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name} - Area: ${country.area} sq km`);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

  