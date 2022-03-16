// 폼 제출 후 form을 화면에서 없애고 싶다. -> css이용

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const username = loginInput.value;
//     loginForm.classList.add("hidden")
//     console.log(username);
// }

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;  //유저네임을 변수로 저장
    greeting.innerText = `Hello ${username} 🙋🏻‍♀️`;    // "Hello " + username 보다 편리한 표기법
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);