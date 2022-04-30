const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {       // todo list 만드는 함수, 인자로 newTodo를 준다.
    const li = document.createElement("li");        // <li></li>를 변수 li로 지정
    const span = document.createElement("span");    // <span></span>를 변수 span으로 지정
    li.appendChild(span);                       // <li><span></span></li>, 나중에 button도 추가하기 위해서 span으로 만든다
    span.innerText = newTodo;                   // // <li><span>newTodo</span></li>
    toDoList.appendChild(li);                  // <ul><li><span>newTodo</span></li></ul>
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    
    // input의 현재 value를 새로운 변수에 복사하고 있음, 복사 한 것이니까 다음에 input에    뭘해도 아무 지장이 없음
    toDoInput.value = "";   // todo Input을 빈 상태로 만들어 준다.
    paintToDo(newTodo);     // paintToDo에 newTodo를 주면서 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/** 
 * 필요한 것 : form이 필요함 -> 사용자가 todo를 입력해야하고, list도 필요 사용자가 todo를 나열해야 해서
 * 
 * todo form, input 만들기 (required로 만든다.)
 * 
 * form이나까 제출될 때 새로고침 -> preventDefault() 필요함
 * html 요소들을 js로 가져온다.
 * fucntion 만들고 submit의 기본동작을 막을 것이다.
 * 
 * 해결해야 할 것
 * 새로 고침 시 todo가 사라지지 않도록, todo 지우는 버튼 만들기
 * */ 