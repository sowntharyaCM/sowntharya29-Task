const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const catNames = data.map(cat => cat.name);
    console.log(catNames);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
