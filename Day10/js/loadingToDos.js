const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 시작시 항상 비어있는[]이라서 값을 덮어쓰기 한다. -> 문제점 해결 필요
// const toDos = [];
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    // input의 현재 value를 새로운 변수에 복사하고 있음
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    // li.appendChild(span);
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

/**
 * localStorage에 있는 string을 array로 다시 변환해야 한다.
 * JSON.parse 이용하기
 * 일단 string 가져오기 localStorage.getItem()
 * todos를 여러 번 쓰니까 실수를 줄이기 위해서 변수로 선언한다.
 * const TODOS_KEY = "todos";
 * 
 * if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}
 * 
 * 가끔 avedToDos가 null일 수도 있다.
 * 
 * js는 array에 있는 각각의 item에 대해 fuction을 실행할 수 있게 해준다.
 * js는 함수를 호출하면서 array에 있는 각각의 item을 준다.
 * 함수를 n번 실행하는 것이 아님
 * parsedToDos는 배열, forEach라는 것을 가지고 있다. forEach는 함수를 실행할 수 있게 해준다.
 * 
 * cf)
// function sayHello(item) {
//     console.log("this is the turn of", item)
// }
parsedToDos.forEach(sayHello);

 // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
이 두 방식은 완벽하게 똑같은 방법이다. (아래방법 : 화살표 함수)

    parsedToDos에서 item이 곹 todo list이므로 paintToDo를 호출하기만 하면 된다.
    왜냐하면 paintToDo는 텍스트를 받는다. JS는 paintToDo에 "list"를 넣어준다. 그것들은 우리 array에 있는 각각의 item이다.

    그런데 이 상태는 새로 저장된 list만 localStorage에 저장하고 이전것은 지워버린다.
    이전 것 + 새로운 것 모두 저장하고 싶다.
    이유? 
    
    // 시작시 항상 비어있는[]이라서 값을 덮어쓰기 한다. -> 문제점 해결 필요
    // const toDos = [];
    let으로 바꿔서 업데이트 가능하도록 설정, localStorage에 이전 list가 있으면 toDos에 parsedToDos를 넣어서 전의 toDo를 복원한다.
    let toDos = [];
     toDos = parsedToDos;


    추가로 해결할 문제 delete를 해도 새로고침하면 살아난다.
    localStorage에서 삭제가 안 되었기 때문이다.

 * 
 */