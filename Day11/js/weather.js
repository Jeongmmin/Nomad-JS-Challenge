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

/**
 * 1. navigator 함수를 이용해 사용자의 위치를 알아내는 코드 작성.
 * navigator.geolocation.getCurrentPosition() 이 코드를 통하면 사용자의 위치를 알 수 있다.
 * 2개의 인자가 필요함 ( 잘 실행됐을때의 함수, 실패했을 때 함수)
 * 
 * function onGeoError() {
alert("Can't find you. No weather for you.");
}
에러가 났다는 것을 alert을 통해서 알려준다.

3. onGeoOk 함수가 실행될 때:
function onGeoOk(position){
const lat = position.coords.latitude;
const lng = position.coords.longitude;
console.log("You live in", lat, lng);
}
JS가 position을 통해서 user의 위치를 전달해준다.
position은 {}이고, 위도, 경도 값이 포함되어 있다. 

날씨도 같이 표현해주기 위해서 OpenweatherApi를 이용한다.
먼저 회원가입 -> api키를 발급받는다.
우리는 current Weather Data api를 사용할 것이다.
https://openweathermap.org/api

Json viewer 설치 => json data를 편하게 볼 수 있다.

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
주소를 ``으로 감싸고 {lat}, {lon}을 우리가 구한값으로 바꾼다. api키도 넣어준다.

이 것을 크롬 주소창에 검색해서 json값이 잘 나오면 다음을 진행할 수 있다.

이제 url에서 필요한 값을 get해야 한다. 링크를 클릭하면 브라우저가 주소로 이동해서 응답하여 값을 보여준다.
fetch를 사용해서 url을 call 해준다.
얻고 싶은 것 : 우리가 있는 장소의 이름 (서울, 부산...)
장소의 날씨 (맑음, 흐름, 비...)
그리고 값을 살펴보면 화씨온도로 되어있는데, 섭씨온도로 바꾸기 위해서 api doc을 살펴볼 필요가 있다.

units을 사용하면 되고 각각imperial(화씨), metric(섭씨), standard(절대온도)를 의미하니까 url 끝에 &units=metric을 붙이면 섭씨온도가 포함된 결과를 얻을 수 있다.
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

fetch가 일어나는 것은 간단하지 않다. fetch는 promise이다.
promise는 당장 뭔가 일어나지 않고 시간이 좀 지난 뒤에 일어나는 것이다.
fetch(url).then(reponse => response.json()); 형태로 일어난다.
* 
fetch(url).then(reponse => response.json()).then(data => {
    console.log(data.name, data.weather[0].main)
})
 * 내용을 추출했으면 data를 얻는다.

<div id="weather">
    <span></span>
    <span></span>
</div>

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
 */