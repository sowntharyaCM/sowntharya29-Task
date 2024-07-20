const url = 'https://restcountries.com/v2/all'; // countries api

fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // handling the fetched data
    console.log(data);
  })
  .catch(error => console.error(error)); // handling error if something wrong happens
