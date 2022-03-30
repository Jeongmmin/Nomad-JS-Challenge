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


[📌 목록으로](/README.md)
