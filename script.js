const api = "8bf1d28631d07542af865b405baf8afe"

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Alexandria,VA,US&appid=${api}`, {})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))