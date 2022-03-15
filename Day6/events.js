// 우리는 button의 클릭에 관심이 있는 것이 아니라, form의 submit에 관심이 있다!!! -> html에 div를 form으로 변경하자
/**
 * submit이라는 event가 발생하는 것을 막거나 중간에 개입해서 submit이 발생했다는 것을 파악하고 싶은 상태
 * 이제 우리가 필요한 것은 login-form 그 자체
 * 
 * 
 */

// 지금 필요한 것은 login-form그 자체

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit() {
//     const username = loginInput.value;  // 처음에는 뭔가 나타났다가 사라짐 = submit은 감지하지만 새로고침을 막지 못하고있음
// //                                          브라우저는 엔터를 누를 때 새로고침 + form submit하게 원래 설정                        
// //                                          우리가 할 것은 기본 동작을 막을 것이다. 
//     console.log(username);
// }

// 이제는 click이 아닌 submit을 감지 - submit은 엔터를 누르거나 버튼을 누를 때 감지된다.
// loginForm.addEventListener("submit", onLoginSubmit);

// 함수에 () 작성하면 바로 실행한다는 의미, automarically(이때까지 배운내용)

// 함수 + () =브라우저가 보자마자 자동으로 function을 실행시킬 것이다.

/** 하지만 지금까지 잘못 알고있던 개념이 있다!!!😱 
 *      정확하게 말하면, 브라우저는 onLoginSubmit() 을 하고 있던 것이 아니다!!
 * 
 * 
 * 실제👇
 * 
 * 우선 onLoginSubmit function을 호출 → 실행하기는 하지만, function(infomation) 이 안에서 정보를 주고 있음
 * 
 * = 브라우저 - 브라우저 내에서 event로 부터 정보를 잡아내서 onLoginSubmit function 실행버튼을 누르고 있다, 우리에게 중요할 지도 모르는 정보들을 가지고 있는 채로.
 * */ 

// 실습

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// 브라우저와 어떤 내용을 주고받는지 알기 위해서 argument주고 preventDefault추가해줌. 이름이 뭐든 상관없음
function onLoginSubmit(tomato) {            
    tomato.preventDefault()
    console.log(tomato);    
}

// 결과 onLoginSubmit function에 대한  argument(tomato)로 어떤 정보를 얻고 있다.

loginForm.addEventListener('submit', onLoginSubmit);

/** 누군가 form을 submit하면 JS가 function을 호출 -> JS는 우리를 너무 사랑해서 그냥 함수를 실행하지 않고,
 * 안에 정보를 담아서 함수를 실행하여 우리에게 정보를 전달해 준다.(발생한 일에 우리가 필요로 할만한 정보 )
 * onLoginSubmit({information})
 * */ 

/**모든 EventListener function의 첫 번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 된다. JS가 그 정보를 무료로 제공한다.
 * 우리는 공간만 제공하면 된다. argument공간만 제공하면 JS가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣는다.
 * 
 * 중요한 것 -> console에 나오는 정보가 방금 실행된 event라는 점!!
 * ex. submit의 주체는? 대상은? submit된 시간?
 * 
 * preventDefault() = 브라우저의 기본 동작을 막아주는 함수, form은 제출되면 새로고침하는 것이 기본 동작
 * 
*/

function onLoginSubmit(event) {            
    event.preventDefault()
    console.log(event);    
}

// 보통 이렇게 쓰는 것이 관행이다.