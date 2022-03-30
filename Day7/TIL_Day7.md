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


[📌 목록으로](/README.md)
