📅 2022-3-19
## **💡 Day11 - (8.0 - 8.2강)** 

> 🌎사용자의 위치 정보와 ⛅해당 위치의 날씨 표시하기 

<br/>
<br/>

> 🌱 **user의 위도(latitude) , 경도(longitude) 구하기**  

👉  navigator 함수를 이용해 사용자의 위치를 알아내는 코드 작성
- [mdn 링크](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition)
- JavaScript가 position을 통해서 user의 위치를 전달해줌.
- position은 object이고, 위도, 경도 값이 포함되어 있다. 
- position( )함수는 2개의 인자가 필요하다.
	- 정상적으로 실행됐을 때의 함수 (onGeoOk)
    - 실행 실패했을 때의 함수 (onGeoError)
```js
  navigator.geolocation.getCurrentPosition(실행⭕함수, 실행❌함수)
```
- 실행 🙆🏻‍♀️함수 (onGeoOk), 실행🙅🏻‍♀️ 함수 (onGeoError)로 설정
- 예시 코드
```js
  function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    }

  function onGeoError() {
    alert("Can't find you. No weather for you.");
    }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```



<br/>    
<br/>
<br/>

> 🌱 **OpenweatherApi 사용준비**  

👉 OpenweatherApi이용해서 user의 현재 위치, 날씨 Data 받아오도록 준비하기
- https://openweathermap.org
- 회원가입 후 개인 Api key 발급받기
- https://openweathermap.org/api
- 로그인 후 api doc 목록으로 이동
- current Weather Data api를 사용하여 위치, 날씨, 온도 Data 받아 올 수 있다.
- 💡 Tip!
	-  JSON 데이터를 편하게 볼 수 있는 방법
    - 크롬 확장 프로그램 [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=ko) 설치
![](https://velog.velcdn.com/images/jmindev/post/0e373212-04d3-42c3-a14a-8af15a553578/image.png)


<br/>    
<br/>
<br/>

> 🌱 **OpenweatherApi 사용하기**  

👉 user의 현재 위치, 날씨 Data 받아오기
```
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

- 이 주소에 위에서 구한 lat, lon, api key를 넣은 후 크롬 주소창에 검색해본 뒤 값이 잘 나온다면 다음 과정을 진행할 수 있다.
- 이제 url에서 필요한 값을 get해볼 것이다.
	- 링크를 클릭하면 브라우저가 주소로 이동해서 응답하여 값을 보여준다. 
    - javaScript는 링크를 누르는 대신 fetch를 사용해서 url을 call 해준다.
- 얻고자하는 데이터
	- 우리가 있는 장소의 이름 (서울, 부산...)
	- 장소의 날씨 (맑음, 흐름, 비...)
    - 기온 (지금은 화씨온도로 되어있는데, 섭씨온도로 바꾸기 위해서 api doc을 살펴볼 필요가 있다.)
- 화씨(Fahrenheit) → 섭씨(Celsius) 변환방법
	- units을 사용하면 된다.
	- 각각imperial(화씨), metric(섭씨), standard(절대온도)를 의미
    - url 끝에 &units=metric을 붙이면 섭씨온도가 포함된 결과를 얻을 수 있다.
```js
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
```
- fetch가 일어나는 것은 간단하지 않은 과정이다.
	- fetch는 promise이다.
    - promise는 당장 뭔가 일어나지 않고 시간이 좀 지난 뒤에 일어나는 것이다.
    - 기다렸다가 내용 추출 => Data 얻기 순서로 이루어져있다.
    - 아래의 형태로 사용
```js
  fetch(url).then(reponse => response.json()).then(data => {
     // 기다린 후 실행하려는 코드 입력하는 곳
  })

  // 예시)
  fetch(url).then(reponse => response.json()).then(data => {
    console.log(data.name, data.weather[0].main)
  })
```



<br/>    
<br/>
<br/>

 
> 🌱 **User의 위치, 날씨, 기온 얻는 방법**  

👉  전체 코드 살펴보기
- json data를 통해 얻을 수 있는 Data
	- 위치 : data.name
  - 날씨 : data.weather[0].main
  - 섭씨기온 : data.main.temp
- html
```html
	<div id="weather">
      <span></span>
      <span></span>
	</div>
```
- javaScript
```js
	const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  const API_KEY = "가입하면서 받은 api key";


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
```


<br/>
<br/>
<br/>

[📌 목록으로](/README.md)
