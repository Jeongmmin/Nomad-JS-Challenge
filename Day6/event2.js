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

// 가끔 기본 동작을 막고 무슨일이 일어나는지 알아야 할 때가 있다.
/**
 * handleLinkClick({ information about the event that just happened })
 * 
 * 함수의 첫 번째 인자가 그 일을 하고, 우리는 공간만 제공해주면 된다.
 * 
 * click해보면 PointerEvent object가 뜬다
 * preventDefault()하면 더 이상 링크로 이동하지 않는다.
 */