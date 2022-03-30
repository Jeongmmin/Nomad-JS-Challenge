// 우리가 할 것 - user에게 질문 -> 누구십니까?
// 이 답을 받는 방법 배울 것이다. vlaue의 값을 기억하는 방법
/**
 * 먼저 html에서 작성해야 한다. 앱을 만드는 중에는 화면이 못나보일 수 있다.
 * 
 */

// // 방법 1 - loginForm도 html element니까!
// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginBtn = loginForm.querySelector('button');

// 방법 2
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     console.dir(loginInput);      
//     console.log("click");
// }

// function onLoginBtnClick() {
//     console.dir(loginInput.value);      // input의 value값을 볼 수 있음, 입력하면 보임
//     console.log("click");
// }

/** 
 * loginInput object에서 확인가능한 property -value
 * value - 기본적으로 나의 input안에 있는 텍스트를 의미함*/ 

function onLoginBtnClick() {
    // console.log('hello', loginInput.value); // 이렇게하면 문제점 -> value값이 없을 때는 hello 빈칸이 나와서 값이 없다는 것을 명확하게 알 수 없다.
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    }else if (username.length > 15) {
        alert("Your name is too long.");
    }
    // 이 방법도 괜찮기는 하지만 브라우저의 기본기능을 사용할 수 있다.
}


loginBtn.addEventListener("click", onLoginBtnClick)

 // 가끔 기본 동작을 막고 무슨일이 일어나는지 알아야 할 때가 있다.
/**
 * handleLinkClick({ information about the event that just happened })
 * 
 * 함수의 첫 번째 인자가 그 일을 하고, 우리는 공간만 제공해주면 된다.
 * 
 * click해보면 PointerEvent object가 뜬다
 * preventDefault()하면 더 이상 링크로 이동하지 않는다.
 */ 