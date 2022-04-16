 📅 2022-3-14
## **💡 Day6 - (4.0 - 4.3강)** 

> 함수는 호출될 때 함수 안에 정보를 담은 상태로 실행되어 우리에게 정보를 전달해 준다.

<br/>
<br/>


> 🌱 **Input의 value**  

👉 사용자가 Input에 입력한 값을 받아오는 방법을 알아보자
- loginInput object에서 확인가능한 property ❓   
  →  **value** : 기본적으로 나의 input안에 있는 텍스트를 의미함  

- 예시코드
```html
     <!-- HTML 파일 -->

     <!-- ver1 -->
    <div id="login-form">
        <input type="text" placeholder="What is your name?">
        <button>Log In</button>
    </div> 

    <!-- ver2 -->
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form>

```
<br/>    

```js
    // ver 1 - loginForm도 html element니까 loginForm 이용
    const loginForm = document.getElementById('login-form');
    const loginInput = loginForm.querySelector('input');
    const loginBtn = loginForm.querySelector('button');

    // ver 2 - input과 button만 따로 가져오기
    const loginInput = document.querySelector("#login-form input");
    const loginBtn = document.querySelector("#login-form button");

    function onLoginBtnClick() {
      console.dir(loginInput.value);      // input의 value값을 볼 수 있음, 입력하면 보임
      console.log("click");
    }
    
    loginBtn.addEventListener("click", onLoginBtnClick) 
```
<br/>
<br/>


> 🌱 **Input value에 조건 걸기**  

👉 user가 입력하는 값의 유효성을 확인하는 방법
- 예시코드
```js
    function onLoginBtnClick() {
    /** 
     *  이렇게하면 문제점 
     * → value값이 없을 때는 hello 빈칸이 나와서 값이 없다는 것을 명확하게 알 수 없다.
    */
    console.log('hello', loginInput.value);
    
    // 조건문 이용해서 제약 걸기 
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    }else if (username.length > 15) {
        alert("Your name is too long.");
    }
    // 이 방법도 괜찮기는 하지만 브라우저의 기본기능을 사용하는 것이 더 좋다.
    }
``` 
- 개선된 방법
- input안에 조건을 입력하기
  - required : input이 비어있는 값이면 안 된다.
  - maxlength : value의 최대길이를 지정.
```html
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form> 
```
- 아직 존재하는 문제점❓
  - form안에 input이 있으면 제출 버튼을 클릭하지 않고, Enter만 눌러도 form 자체가 Submit된다.
  - 하지만 Form이 Submit될 때 마다 페이지가 새로고침 되고, input에 적힌 value가 사라진다.😱
- 즉, Form이 제출될 때 페이지가 reload되는 것을 막고, value를 저장할 수 있는 방법이 필요하다.🤔

<br/>
<br/>


> 🌱 **Event**  

👉 Form의 Submit event 조작하기
- 페이지 새로고침 막는 방법
  - browser는 Form안의 Input에서 Enter를 누르면 새로고침 + Form submit하도록 설정되어 있다.
  - 이 기본 동작을 막아볼 것이다. → preventdefault() 사용  
  ```preventDefault() = 브라우저의 기본 동작을 막아주는 함수```
- 함수가 호출될 때 일어나는 일
  - 이때까지 배운내용은 함수에 ( ) 작성하면 바로 실행한다는 의미라는 것!
  - 하지만 추가로 알아야 할 개념이 있다.   
    - 정확하게 말하면, 브라우저는 onLoginSubmit() 만을 하고 있던 것이 아니다!!     
      ```📌 실제로는 함수 호출 → function(infomation)형태로 **실행** ➕ **정보전달**이 동시에 이루어진다.😆```  

- 예시코드
```js
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");

    /** 
     * 브라우저와 어떤 내용을 주고받는지 알기 위해서 argument주고 preventDefault추가.
     * 이름이 무엇인지는 상관없음 - tomato 사용
     * */ 

    function onLoginSubmit(tomato) {            
    tomato.preventDefault()     // '새로고침'이라는 기본동작 막기
    console.log(tomato);    
    }

    
    loginForm.addEventListener('submit', onLoginSubmit);
```
- 모든 function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 된다.   
  JS가 그 정보를 무료로 제공한다.
- 우리는 공간만 제공하면 된다.   
  argument공간만 제공하면 JS가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣는다.
- console.dir(argument)로 확인 가능
- ✨중요한 Point!   
  → console에 나오는 정보가 방금 실행된 event라는 점!!  
  ex) 정보 : submit의 주체는? 대상은? submit된 시간은?
- 기본 모양
```js
    function onLoginSubmit(event) {            
        event.preventDefault()
        console.log(event);    
    }
```
- 모든 개념을 종합한 예시코드
```html
     <!-- ver 3 -->
    <form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form>
    <a href="https://nomadcoders.co">Go to courses</a>
```
```js
    // 링크와 Form의 기본 동작을 막고, 그 value를 console.log()로 관찰하는 방법.

    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const link = document.querySelector("a");

    function handleClick(event) {
        event.preventDefault()
        console.dir(event);
        // alert("clicked!");
    }

    function onLoginSubmit(event) {
        event.preventDefault();
        console.log(loginInput.value);
    }

    link.addEventListener("click", handleClick);
    loginForm.addEventListener("submit",onLoginSubmit)
```

<br/>
<br/>
<br/>

📅 2022-3-15
## **💡 Day7 - (4.4 - 4.7강)** 

> value getting, saving, loading 하는 방법

<br/>
<br/>


> 🌱 **Getting Username**  

👉 사용자가 Input에 입력한 값을 화면에 출력하기
- Form 제출 후 Form을 화면에서 사라지게하기(CSS 이용)
  - ```CSS class hidden 이용하기 [ display : none ]```
- input의 value를 username으로 할당  
  - ```const username = loginInput.value;```

- 예시코드
```html
     <!-- HTML 파일 -->

     <form class="hidden" id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <input type="submit" value="Log in">
    </form>

    <h1 id="greeting" class="hidden"></h1>

```
<br/>    

```js
    // js 파일

    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const loginBtn = document.querySelector("#login-form button");
    const greeting = document.querySelector("#greeting");

    //일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용
    const HIDDEN_CLASSNAME = "hidden";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        
        //유저네임을 변수로 저장
        const username = loginInput.value;  
        
        // "Hello " + username 보다 편리한 표기법 ( `${값}` 정규표현식)
        greeting.innerText = `Hello ${username}`;    
        greeting.classList.remove(HIDDEN_CLASSNAME)
    }

    loginForm.addEventListener("submit", onLoginSubmit);
```
<br/>
<br/>


> 🌱 **Saving Username**  

👉 사용자가 입력한 Input의 value를 저장해두는 방법
- ```LocalStorage 사용하기```
  - 브라우저에 값을 저장하고 싶을 때 사용한다.
  - 미니 DB의 느낌
  - localStorage.```setItem``` : 값을 저장할 때 사용
  - localStorage.```getItem``` : 값을 가져올 때 사용
  - localStorage.```removeItem``` : 값을 지울 때 사용

- 예시코드
```js
    function onLoginSubmit(event) {
      event.preventDefault(); 
      loginForm.classList.add(HIDDEN_CLASSNAME);   
      const username = loginInput.value;  

      // localStorage 사용
      localStorage.setItem("username", username);

      greeting.innerText = `Hello ${username}`;    
      greeting.classList.remove(HIDDEN_CLASSNAME)
}
```
- 개선할 방향
  - 현재 → 이름 입력 -> 로그인버튼 or 엔터 -> Hello 이름! -> 이름이 LocalStorage에 저장  
    But! 새로고침 시 username값은 localStrage에 있지만 여전히 form은 다시 나타난다❗
  - 👉 localStorage에 
    - username값🙆🏻‍♀️ → Hello 이름 화면 보여줌  
    - username 🙅🏻‍♀️ → 로그인 폼 나오도록 설정





<br/>
<br/>


> 🌱 **Loading Username**  

👉 localStorage에 값의 유뮤에 따라서 화면을 다르게 보이도록 설정하기
- 해야할 일
  - username이 너무 많이 반복되고 있음 → 오타 시 오류가능성 → USERNAME_KEY로 변수설정
- 예시코드
```js
    const USERNAME_KEY = "username";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        const USERNAME_KEY = loginInput.value; 
        localStorage.setItem("USERNAME_KEY", username);
        greeting.innerText = `Hello ${username}`;   
        greeting.classList.remove(HIDDEN_CLASSNAME)
    }

    const savedUsername = localStorage.getItem("USERNAME_KEY");

    // 이 구문을 완성하기 위해 form, greeting모두 hidden상태로 시작한다.
    if (savedUsername === null) {
        // show the form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else {
        // show the greetings
        greeting.innerText = `Hello ${savedUsername}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
```
- 개선 필요한 점   
 : 같은 동작을 2번 반복하고 있음   
 onLoginSubmit( )과 if문에서   
 👉  ```(greeting.innerText, greeting.classList.remove(HIDDEN_CLASSNAME))``` 반복 된다.
- 이런것은 함수로 만드는 것이 더 좋다.   
  →  ```paintGreetings 라는 함수 만들기```
- 개선된 코드
```js
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const loginBtn = document.querySelector("#login-form button");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";

    const USERNAME_KEY = "username";

    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME)
        const USERNAME_KEY = loginInput.value; 
        localStorage.setItem("USERNAME_KEY", username);
        paintGreetings(username);
    }

    function paintGreetings(username) {
        greeting.innerText = `Hello ${username}`;   
        greeting.classList.remove(HIDDEN_CLASSNAME)
    }
    
    const savedUsername = localStorage.getItem("USERNAME_KEY");

    if (savedUsername === null) {
        // show the form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else {
        // show the greetings
        paintGreetings(savedUsername);
    }
```
- ```paintGreeting함수```를 이용해서 코드 반복을 줄였지만, 우리가 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 된다.
```  - 예시) 
    - local Storage에 유저정보가 ⭕  
       → 거기서 유저정보를 받아서 인자로 넣는다.
       
    - 만약 local storage에 유저정보가 ❌   
    → form의 submit을 기다림 → form이 submit되면 input으로부터 유저정보를 받음   
    → input에서 받은 user를 가진 patint Greetings를 호출
```



<br/>
<br/>
<br/>

📅 2022-3-16
## **💡 Day8 - (5.0 - 5.3강)** 

> ⏱ 타이머 만들기

<br/>
<br/>


> 🌱 **Interval vs Timeout**  

👉 둘의 사용법과 차이점에 대해서 알아보기
- Interval
  - 매번 일어나야 하는 일에 사용
  - JS에 이미 내장되어 있는 함수
  - **setInterval(함수명, 반복될 시간(ms))** 으로 사용한다. 
- Timeout 
  -  한 번 실행 후 반복되지 않음
  - 설정한 시간 뒤에 한 번 실행된다. 
  - **setTimeout(함수명, 실행될 시간(ms))** 으로 사용한다.
- [🔗 Date 관련 인스턴스 메서드 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - ex) getDay, getFullYear, getHours, getMinutes, getSeconds...
- 👉 타이머에는 setInterval함수 사용할 것이다.
<br/>    

- 예시코드
```js
    setInterval(getClock, 1000)  // 1초 마다 계속 실행

    setInterval(getClock, 5000)  // 5초 뒤 한번 실행
```
<br/>    

<br/>
<br/>


> 🌱 **현재 시간 표시하기**  

👉 본격적으로 현재 시간, 날짜 data 가져오는 방법 알아보기
- 시간 가져오기
  - getHours, getMinutes, getSeconds를 사용
- 날짜 가져오기
  - new Date() 사용
  - new 붙이는 이유?    
    : 그냥 date( ); => new date( );를 쓴 것을 그대로 string으로 만든 것,    
     따라서 gethours같은 property를 사용할 수 없다!
```js
    // new 사용하는 이유?

    date( ); === new date( ).toString();
```
    
- 예시 코드
```js
  function getClock() {
    // 날짜
    const date = new Date();
    // 시, 분, 초 분리
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  setInterval(getClock, 1000);
```


- 개선할 요소 🤔
  - 시간 표시가 한 자리 일때 01, 02, 03 이런 식으로 보이게 만들고 싶다.
  - 새로 고침 하면 1초 뒤에 시간이 표시된다.


<br/>
<br/>


> 🌱 **PadStart**  

👉 시간 표시 01, 02, 03 같이 보이도록 수정하기
- PadStart
  - 가지고 있는 string을 보다 길게 만들어야 할 때 사용
  - 사용법 :  padStart(가져야할 자리수, "빈자리에 채우고 싶은 숫자 또는 문자")
  - 💡 주의사항    
   : padStart는 string에만 사용가능 -> number는 string으로 변환해야 한다. → String(변환할 숫자)
- 예시코드
```js
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
```
- hours, minutes, seconds가 string으로 변환 됐으므로 clock에 넣은 변수의 형태도 변환된다.
```js
    // 변환 전
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    // 변환 후
    clock.innerText = `${hours}:${minutes}:${seconds}`;
```
- ➕ 추가로 배운 것 
- PadEnd : 가진 string뒤의 자리를 채울 때 사용
- string길게 만들 때 **삼항 연산자**를 사용하는 경우도 있음


<br/>
<br/>
<br/>    

> 🌱 **페이지 로드 되는 순간 타이머 시작되도록 설정하기**  

👉 setInterval만 쓰면 1초 뒤에 타이머가 동작된다. 이 문제를 해결해보자
- 해결방법
  - setInterval이 시작 되기 전에 getClick 함수를 한 번 더 호출해 준다.
 
- 최종 코드
```js
    const clock = document.querySelector("#clock");

    function getClock() {
        const date = new Date();
        
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }


    getClock();
    setInterval(getClock, 1000)
```




<br/>
<br/>
<br/>


[📌 목록으로](/README.md)
