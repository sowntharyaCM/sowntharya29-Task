const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const { name, capital, languages, population, area } = country;
      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area || 'N/A'}`);
      console.log('---------------------');
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
