const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "e7e7e324190f917e6d9f980e9161c4d2";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        city.innerHTML = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    console.log(url);
}


function onGeoError() {
alert("Can't find you. No weather for you.");
}
    
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);