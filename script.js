const currentWeather = document.querySelector('.card-text1');
const weatherIcon = document.querySelector('.card-img-top1')
const temperature = document.querySelector('.temp')
const sunriseInfo = document.querySelector('.card-text3')
const sunsetInfo = document.querySelector('.card-text4')
const locationName = document.querySelector('.location')
const feelsLikeTemp = document.querySelector('.feels-like')
const maxTempInfo = document.querySelector('.max-temp')
const minTempInfo = document.querySelector('.min-temp')
const windInfo = document.querySelector('.wind')
const visibilityInfo = document.querySelector('.visibility')



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
            const wind = data.wind.speed
            const visibility = data.visibility


            weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
            currentWeather.innerHTML = `${allCaps(weatherDescription)}`;
            temperature.innerHTML = `${convertTemp(temp)}°F`;
            sunriseInfo.innerHTML = `${formatTime(sunrise)}`
            sunsetInfo.innerHTML = `${formatTime(sunset)}`
            locationName.innerHTML = `${allCaps(nameValue)}`;
            feelsLikeTemp.innerHTML = `${convertTemp(feelsLike)}°F`
            maxTempInfo.innerHTML = `${convertTemp(tempMax)}°F`
            minTempInfo.innerHTML = `${convertTemp(tempMin)}°F`
            windInfo.innerHTML = `${convertSpeed(wind)} mph`
            visibilityInfo.innerHTML = `${convertDistance(visibility)} mi`


            console.log(nameValue, weatherDescription)
        })
        .catch(error => console.log('Error'))
}

const convertTemp = temp => {
    return Math.round((temp - 273.15) * 9 / 5 + 32)
}

const allCaps = str => str.toUpperCase()

const convertSpeed = speed => {
    const mph = speed * 2.237
    return mph.toFixed(2)
}

const convertDistance = distance => {
    const miles = distance / 1609
    return miles.toFixed(2)
}

const formatTime = time => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    // Display time in 10:30:23 format
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}