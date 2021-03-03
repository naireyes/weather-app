const currentWeather = document.querySelector('.card-text1');
const weatherIcon = document.querySelector('.card-img-top1')
const temperature = document.querySelector('.temp')
const sunriseInfo = document.querySelector('.card-text3')
const sunsetInfo = document.querySelector('.card-text4')
const locationName = document.querySelector('.location')



const api = "8bf1d28631d07542af865b405baf8afe"
const getWeatherInfo = () => {
    let userInput = document.querySelector(".text-input").value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${api}`)
        .then(response => response.json())
        .then(data => {
            const nameValue = data.name;
            const weatherDescription = data.weather[0].description
            const icon = data.weather[0].icon
            const temp = data.main.temp
            const feelsLike = data.main.feels_like
            const tempMin = data.main.temp_min
            const tempMax = data.main.temp_max
            const sunrise = data.sys.sunrise
            const sunset = data.sys.sunset

            weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
            currentWeather.innerHTML = `${allCaps(weatherDescription)}`;
            temperature.innerHTML = `${convertTemp(temp)}°F`;
            sunriseInfo.innerHTML = sunrise
            sunsetInfo.innerHTML = sunset
            locationName.innerHTML = `${allCaps(nameValue)}`;



            console.log(nameValue, weatherDescription)
        })
        .catch(error => console.log('Error'))
}

const convertTemp = temp => {
    return Math.round((temp - 273.15) * 9 / 5 + 32)
}

const allCaps = str => str.toUpperCase()