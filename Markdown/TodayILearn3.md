📅 2022-3-17
## **💡 Day9 - (6.0 - 6.2강)** 

> 🎲 랜덤으로 명언, 배경 설정하기 (JS에서 만든 요소 Html에 추가하기)

<br/>
<br/>


> 🌱 **Array에 접근하기**  

👉 랜덤으로 값을 받기 위해서는 먼저 데이터가 담긴 Array에 접근하는 방법을 알아야 한다.
- 어떻게 첫 번 째 array안에 접근할 수 있을까?
  - 명언 10개가 담겨있는 quotes[ ]가 있을 때    
   → console.log(quotes[0])을 사용하면 된다.
- 명언이 10개이므로 index는 0 - 9 까지의 값이 존재한다.
  - 즉! 0 - 9까지의 값을 랜덤으로 받아오면 된다.    
   👉 어떻게 할 수 있을까? 랜덤 함수를 사용하면 된다!

<br/>    
<br/>
<br/>

> 🌱 **Math.random( )**  

👉  사용 시 0 - 1 사이의 값을 랜덤으로 얻을 수 있다.
- 우리가 필요한 숫자는 0 - 9 까지 인데, 어떻게 사용하면 될까? 🤔    
  → 💡 랜덤으로 나온 값에 * 10을 해주면 된다.    
- 0 - 9 까지의 값을 구했지만, 뒤에 소수점이 있다.    
  → 💡 올림 / 반올림 / 내림 해주면 된다.    
  - Math.round() → 반올림
  - Math.ceil() → 올림
  - Math.floor() → 내림
- 이 중에서 floor( )를 사용할 것이다.
- 예시 코드
```js
    const TodaysQuote = quotes[Math.floor(Math.random() * 10)];
```
- 개선 필요 사항
  - X 10 을 하면 항상 array에 data가 10개 인 것만 사용가능하다. 


<br/>    
<br/>
<br/>

> 🌱 **length 사용하기**  

👉  배열.length = 배열의 길이를 구해준다.
- length를 사용하면 data가 10개 인 것 외에 data가 추가되거나 삭제되어도 그 길이만큼의 랜덤 숫자를 얻을 수 있다.      
- 배열이 10개 일 때 랜덤 숫자는 10에 접근할 수 없다.  
  → 0 - 1 사이의 소수 * 10의 값이기 때문!    
  → 하지만 배열의 index는 **0부터** 시작되기 때문에 (최종 길이 -1) 까지의 값만 있으면 된다.
- 예시코드(명언)
```html
    <!-- html -->

    <div id="quote">
      <span></span>
      <span></span>
```

```js
    // js
    const quotes = [{
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",
      },
    ... // 생략, 총 10개 넣기
    ];

    const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = TodaysQuote.quote;
    author.innerText = TodaysQuote.author;
```

<br/>    
<br/>
<br/>

> 🌱 **랜덤 배경 넣기**  

👉  명언을 넣을 때와 같은 방법 사용
- 프로젝트 폴더에 img폴더 만들고, 랜덤으로 쓸 이미지 넣기
- 이미지 이름으로 배열 만들기
```js
    const images = ["0.jpg", "1.jpg", "2.jpg"];
```  
- 랜덤 함수 만들기
```js
    const chosenImage = images[Math.floor(Math.random() * images.length)];
```
- css 배경으로 적용하기 위해 만들어 두기
```css
    img {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: fadeIn 0.5s linear;
    }
```
- 랜덤 이미지를 배경으로 추가해주도록 js 설정하기
```js
    const bgImage = document.createElement("img");
    bgImage.src = `./img/${chosenImage}`;
```
- body에 img 추가하기
```js
    document.body.appendChild(bgImage);
```


<br/>
<br/>
<br/>


[📌 목록으로](/README.md)


📅 2022-3-18
## **💡 Day10 - (7.0 - 7.8강)** 

> 📝 JS로 ToDo List 만들기

<br/>
<br/>


> 🌱 **ToDo List 기본 틀 준비**  

👉 일단 필요한 요소들은 어떤 것이 있는지 알아보자.
- Form
  - 사용자가 todo 입력 → 제출하는 형태가 필요하다.
- List
  - 입력한 todo를 나열해야 된다.
- input
  - 사용자에게 todo를 입력 받아야 한다.
  
- 예시 코드
```html
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
```
```js
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = document.querySelector("#todo-form input");
    const toDoList = document.getElementById("todo-list");

    function paintToDo(newTodo) {       
      const li = document.createElement("li");        
      const span = document.createElement("span");    
      li.appendChild(span);                      
      span.innerText = newTodo;                   
      toDoList.appendChild(li);                  
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; 
      toDoInput.value = "";  
      paintToDo(newTodo);     
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);
```
- 주목할 만한 코드
```js
    // 나중에 button도 추가하기 위해서 span으로 만든다
    li.appendChild(span);    
    
    /** 
    ToDo는 입력받은 value대로 각각 한 줄씩 존재한다.
    input의 현재 value를 새로운 변수에 복사하고 있다. 
    복사 한 것이므로 다음에 input에 뭘해도 아무 지장이 없다.
    */ 
    const newTodo = toDoInput.value; 

    // todo Input을 비어 있는 상태로 만들어 준다.
    toDoInput.value = "";   
    
    // paintToDo에 newTodo를 인자로 주면서 호출한다.
    paintToDo(newTodo); 
```
- 그 외 해결사항
  - form이 submit 후 새로고침 되지 않도록 기본동작 막기 - preventDefault( ) 사용
  - todo를 지우는 버튼도 만들어 보자.
  - 새로고침 뒤에도 입력한 todo가 사라지지 않도록 만들자.


<br/>    
<br/>
<br/>

> 🌱 **Delete ToDos**  

👉  todo 삭제 버튼 만들기
- 조건
  - 이 버튼은 event를 수신해야 한다.
  - append는 마지막에 넣어주어야 한다. 
    ("todo list + 삭제버튼"이 리스트의 한 쌍이다. 각자 다 만든 후 li에 append!)
- 삭제 버튼 만들기
  - 버튼 태그 만들기 → 안에 들어갈 요소 넣기 (del, x) → 이벤트 수신할 수 있게 설정
```js
    function paintToDo(newTodo) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = newTodo;

      const button = document.createElement("button");    //button 만들기
      button.innerText = "❌";                            // button 안에 x 이모티콘 넣기
      button.addEventListener("click", deleteToDo);       // 버튼 이벤트 수신

      li.appendChild(span);                               
      li.appendChild(button);                             
      toDoList.appendChild(li);                          
    }
```
- 요소를 삭제하는 deleteToDo 함수 만들기
  - 여러개의 todo중에 어떤 것을 지워야 할지 알아야 한다.
  - click이벤트를 console로 확인해보면 Path에서 버튼이 li에 포함되어 있는 것을 알 수 있다.  
- deleteToDo 코드
```js
    function deleteToDo(event) {                        
      const li = event.target.parentElement;          
      li.remove();
    }
```



<br/>    
<br/>
<br/>

 
> 🌱 **Save ToDos**  

👉  새로고침해도 사라지지 않도록 저장하기.
- toDos라는 이름의 빈 배열 선언하기
```js
    const toDos = [];
```       
- 새로운 todo가 생기면 toDos 배열에 추가되도록 설정
```js
    toDos.push(newTodo);
```
- localStorage에 toDos[] 저장하는 함수 만들기 
  (지난번 greeting처럼 string 형태로 저장해야 한다.)
```js
    function saveToDos() {
      localStorage.setItem("todos", JSON.stringify(toDos));
    }
```
- paintToDo(newTodo)뒤에 saveToDos 호출하기
```js
    saveToDos();
```
- 최종 코드
```js
    const toDos = [];

    function saveToDos() {
      localStorage.setItem("todos", JSON.stringify(toDos));
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;    
      toDoInput.value = "";
      toDos.push(newTodo);
      paintToDo(newTodo);
      saveToDos();
    }
```

<br/>    
<br/>
<br/>

> 🌱 **loading Todos**  

👉 localStrage에 저장된 todo list 가져오기
- 현재는 localStorage에는 저장되어 있지만, 화면에는 보이지 않는 상태이다.
- localStorage에 있는 string을 array로 다시 변환.
  - string 가져오기 → localStorage.getItem( )사용
- todos를 여러 번 쓰니까 실수를 줄이기 위해서 변수로 선언.
  - const TODOS_KEY = "todos";
-  savedToDos가 null일 가능성 고려해야 함.
- forEach 사용해서 각 list 화면에 뿌려주기.
  - js는 array에 있는 각각의 item에 대해 fuction을 실행할 수 있게 해준다.
  - parsedToDos는 배열이므로, forEach라는 것을 가지고 있다. 
    forEach는 item에 대해 함수를 실행할 수 있게 해준다.
- 💡 JS Tip!
  - 1번, 2번 방법은 동일한 표현법이다.
  - 2번 : 화살표 함수 사용방법
```js
    // 1번
    function sayHello(item) {
      console.log("this is the turn of", item)
    }
    parsedToDos.forEach(sayHello);

    // 2번
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
```
- 우리는 이미 todo list를 그리는 paintToDo( )가 있다.
  - paintToDo는 newItem이라는 인자가 필요한데 이 인자가 곹 localStorage에서 가져온 parsedTodo이므로 그냥 paintToDo만 forEach에 넣어주면 된다.
- loading Todos 코드
```js
    const TODOS_KEY = "todos";

    const savedToDos = localStorage.getItem(TODOS_KEY);
  
    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      parsedToDos.forEach(paintToDo);
    }
```
- 여기까지 했을 때 문제점❓
  - 이 상태는 새로 저장된 list만 localStorage에 저장하고 이전것은 지워버린다.
  - 이유?    
    시작시 항상 비어있는[ ]이라서 paintToDo를 호출 할 때마다 값을 덮어쓰기 한다.
```js
     const toDos = [];
```
  - 해결방안
    - let으로 바꿔서 업데이트 가능하도록 설정
    - localStorage에 이전 list가 있으면 toDos에 parsedToDos를 넣어서 전의 toDo를 복원.
- 수정 된 코드
```js
    let toDos = [];

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
```
- 추가로 해결할 문제 ❓
  - delete를 해도 새로고침하면 살아난다.
  - localStorage에서 삭제가 안 되었기 때문이다. 이 문제를 해결해보자.



<br/>
<br/>
<br/>

> 🌱 **Delete Todos 2**  

👉 삭제 버튼 누르면 localStrage에서도 삭제되도록 만들기.
- 어떤 todos text가 지워지는지 알아야 한다. 
  - todos를 만들 때 id를 주도록 만들자
  - 랜덤 id 만들기 -> Date.now() 사용 (todo가 만들어 질때의 날짜와 시간)
  - 이전: 사용자가 적어둔 text를 데이터베이스로 push
  - 현재 : object를 데이터베이스로 push
```js
    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; 
      const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
    }
```
- newToDoObj가 됐으니까 paintTodo의 내용을 조금 변경해주어야 한다.
```js
    function paintToDo(newTodo) {
      const li = document.createElement("li");

       // 각 list에 id값을 준다.
      li.id = newTodo.id;

      const span = document.createElement("span");

       // 이렇게 해주지 않으면 화면에 object형태로 표시된다.
      span.innerText = newTodo.text;

      const button = document.createElement("button");
      button.innerText = "❌";
      button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);
    }
```
- 이제 x 버튼을 누를 때 그 list의 id를 얻을 수 있으면 localStorage에서도 삭제가 가능
- array에서 element 삭제하는 방법?   
  👉🏻 filter 사용
  - 실제로 element를 array에서 지우는 것이 아니라 지우고 싶은 item을 뺴고 새 array를 만든다. (매우 중요✨)
  - filter(함수)의 형태로 사용
  - filter는 forEach처럼 각 item을 넣어서 함수를 호출한다. 
  - array의 item을 유지하고 싶다면 filter안의 함수는 반드시 true를 리턴해야만 한다.
  - false를 리턴한다면 새 array에 false를 리턴한 item은 들어가지 않는다.
- 이 개념으로 localStorage에서도 삭제되도록 만들어보자.
  - 버튼을 클릭할 때마다 list의 id를 얻을 수 있다. 
  - array에 있는 item의 id !== 클릭 된 id => 새 array에 추가되도록 filter를 설정
```js
    toDos = toDos.filter((toDo) => toDo.id !== li.id);
```
- 그런데 여기까지 하면 문제가 발생한다.    
  👉🏻 변수의 type 때문에 제대로 동작하지 ❌
  - li의 id는 string, 이것을 number로 바꾸어주어야 한다.
  - 그 다음 새로 만들어진 array를 toDos에 업데이트 해준다.
```js
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
```

<br/>
<br/>
<br/>

> 🌱 **Todo List 완성 버전**  

👉 전체적으로 해결 방안이 적용된 코드

```html
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
```

```js
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = document.querySelector("#todo-form input");
    const toDoList = document.getElementById("todo-list");

    const TODOS_KEY = "todos";

    let toDos = [];

    function saveToDos() {
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
      const li = event.target.parentElement;
      li.remove();
      toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
      saveToDos();
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;
      toDoInput.value = "";
      const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
    }

    function paintToDo(newTodo) {
      const li = document.createElement("li");
      li.id = newTodo.id;
      const span = document.createElement("span");
      span.innerText = newTodo.text;
      const button = document.createElement("button");
      button.innerText = "❌";
      button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY);

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
```


<br/>
<br/>
<br/>

[📌 목록으로](/README.md)


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

