function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    //const apiKey = 'bbfba957dfe20103fb264bae1bdb31ef'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bbfba957dfe20103fb264bae1bdb31ef';
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Failed to fetch weather. Please try again.</p>';
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );