const apiKey = "882744014b8f5b41297ebd35651cb9bf";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const weatherElement = document.querySelector(".weather");
    weatherElement.style.height = weatherElement.scrollHeight + "px";
    const response = await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+`°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
} )