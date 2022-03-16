// username을 기억하고 싶다 = localStorage 사용하기

// 브라우저에 무엇을 저장하고 싶을 때 사용

/**
 * localStorage 마치 미니DB같다.
 * localStorage.setItem : 값을 저장할 때 사용
 * localStorage.getItem : 값을 가져올 때 사용
 * localStorage.removeItem : 값을 지울 때 사용
 * 
 */


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용


function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본동작을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME)   // 로그인 폼에 hidden class 추가
    const username = loginInput.value;  //유저네임을 변수로 저장
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username} 🙋🏻‍♀️`;    // "Hello " + username 보다 편리한 표기법
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);

/** 여기까지 하면 이름 입력 -> 로그인버튼 or 엔터 -> Hello 이름! -> 이름이 LocalStorage에 저장된다.
    새로고침 시 username값은 localStrage에 있지만 여전히 form은 다시 나타난다.

    이것을 localStorage에 username값이 있다면 Hello XX 화면 보여주고 없다면 로그인 폼 나오도록 설정해 줄것이다. -> 
 */