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
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    // input의 현재 value를 새로운 변수에 복사하고 있음
    toDoInput.value = "";
    // toDos.push(newTodo);
    // paintToDo(newTodo);
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // li.appendChild(span);
    // span.innerText = newTodo;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

/**
 * 화면에서 지워지만 localStrage에서도 지워지도록 만들자
 * 어떤 todos text가 지워지는지 알아야 한다. 
 * todos를 만들 때 id를 주도록 만들자
 * 
 * 랜덤 id 만들기 -> Date.now() 사용 (todo가 만들어 질때의 날짜와 시간)
 * 
 * function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;    
      toDoInput.value = "";
      toDos.push(newTodo);
      paintToDo(newTodo);
      saveToDos();
    }
    현재 여기서 매번 사용자가 적어둔 text를 데이터베이스로 push 한다.
    이제 object를 push 할 것이다.

    function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    // input의 현재 value를 새로운 변수에 복사하고 있음
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

newToDo -> newToDoObj가 됐으므로, paintTodo의 내용을 조금 변경해주어야 한다.

span.innerText = newTodo; ->  span.innerText = newTodo.text;
이렇게 해주지 않으면 화면에 object형태로 표시된다.
li.id = newTodo.id;
각 list에 id값을 준다.

이제 x 버튼을 누를 때 그 list의 id를 얻을 수 있으면 localStorage에서도 삭제가 가능하다.
array에서 element 삭제하는 방법?
paintToDo에서 어떤 일이 일어나는 지 이해해야 한다.
filter 사용 => 실제로 element를 array에서 지우는 것이 아니라 지우고 싶은 item을 뺴고 새 array를 만드는 것!
filter(함수) filter는 forEach처럼 각 item을 넣어서 함수를 호출한다. 
array의 item을 유지하고 싶다면 filter안의 함수는 반드시 true를 리턴해야만 한다.
false를 리턴한다면 새 array에 false를 리턴한 item은 들어가지 않는다.

이것을 사용하여 delete 되도록 만들어보자
우리가 버튼을 클릭할 때마다 list의 id를 얻을 수 있다. array에 있는 item의 id가 클릭 된 id와 다르면 새 array에 추가되도록 filter를 설정한다.
그 다음에 새 array를 toDos에 업데이트 해 준다.
toDos = toDos.filter((toDo) => toDo.id !== li.id);
그런데 또 문제가 있다. 이렇게만 하면 동작하지 않는다.
이유?
변수의 type 때문, li의 id는 string이다 이것을 number로 바꾸어주어야 한다.
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
 * 
 */