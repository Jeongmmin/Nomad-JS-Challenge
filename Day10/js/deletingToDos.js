const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {                        // todo 지우는 함수
    const li = event.target.parentElement;          // 어떤 것을 지워야 하는 지 알아야 한다. 우리는 click이벤트에 대한 정보가 있다. console.로 보면 path에서 버튼이 li에 포함되어 있는 것을 알 수 있음 (부모요소)
    li.remove();
    // li.edit();
}

function editTodo(event) {
    const li = event.target;
    li.edit();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");    //button 만들기
    button.innerText = "❌";                            // button 안에 x 이모티콘 넣기
    button.addEventListener("click", deleteToDo);       // 버튼 이벤트 수신
    li.appendChild(span);                               // <li><span></span></li>
    li.appendChild(button);                             //  <li><span></span><button></button></li>              
    toDoList.appendChild(li);                           // <ul><li><span></span><button></button></li></ul>
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    // input의 현재 value를 새로운 변수에 복사하고 있음
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/**
 * 삭제 버튼 만들기
 * 이 버튼은 event를 수신해야 한다.
 * 1. 버튼 만들기 (click event를 수신할 버튼)
 * append는 마지막에 넣어주어야 한다.
 * 뭔가 클릭되었다는 것을 알고 싶으면? -> evnetListener
 */