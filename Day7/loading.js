// 이것을 localStorage에 username값이 있다면 Hello XX 화면 보여주고 없다면 로그인 폼 나오도록 설정해 줄것이다. 

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
    // greeting.innerText = `Hello ${username} 🙋🏻‍♀️`;   
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(username);
}

// loginForm.addEventListener("submit", onLoginSubmit);

// 콘솔에 찍어본 값
// localStorage.getItem("username")
// 'jm'
// localStorage.getItem("username")
// null

// greeting에 Hello ${username} 추가하고 hidden class remove 함수
function paintGreetings(username) {
    greeting.innerText = `Hello ${username} 🙋🏻‍♀️`;   
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

console.log(savedUsername); //null이라고 나옴

// username이 너무 많이 반복되고 있음 -> 오타 시 오류가능성 -> USERNAME_KEY로 변수설정


// 이 구문을 완성하기 위해 form, greeting모두 hidden상태로 시작한다.
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // show the greetings
    // greeting.innerText = `Hello ${savedUsername} 🙋🏻‍♀️`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

// 하지만 같은 동작을 2번 반복하고 있음 => onLoginSubmit과 if문에서 (greeting.innerText, greeting.classList.remove(HIDDEN_CLASSNAME)) 반복

// 이런것은 함수로 만드는 것이 더 좋다. -> paintGreetings 라는 함수 만들기

/** paintGreeting함수를 이용해서 코드 반복을 줄였지만, 우리가 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 된다.
 * 예시) local Storage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣는다.
 * 만약 local storage에 유저정보가 없다면, 우리는 form의 submit을 기다라고 form이 submit되면 우리는 input으로부터 유저정보를 받고, input에서 받은 user를 가진 patint Greetings를 호출할 것이다.
 * 
 * 
 * 
*/