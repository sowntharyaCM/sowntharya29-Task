const url = 'https://restcountries.com/v2/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('===== Promise Method');
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });const fetchData = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      console.log('===== Async/Await Method');
      console.log(countries);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
  


