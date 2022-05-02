📅 2022-3-19
## **💡 Day11 - (8.0 - 8.2강)** 

> 🌎사용자의 위치 정보와 ⛅해당 위치의 날씨 표시하기 

<br/>
<br/>

> 🌱 **ToDo List 기본 틀 준비**  

👉 일단 필요한 요소들은 어떤 것이 있는지 알아보자.
- Form
  - 사용자가 todo 입력 → 제출하는 형태가 필요하다.
- List
  - 입력한 todo를 나열해야 된다.
- input
  - 사용자에게 todo를 입력 받아야 한다.
  
- 예시 코드
```html
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
```
```js
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = document.querySelector("#todo-form input");
    const toDoList = document.getElementById("todo-list");

    function paintToDo(newTodo) {       
      const li = document.createElement("li");        
      const span = document.createElement("span");    
      li.appendChild(span);                      
      span.innerText = newTodo;                   
      toDoList.appendChild(li);                  
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; 
      toDoInput.value = "";  
      paintToDo(newTodo);     
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);
```
- 주목할 만한 코드
```js
    // 나중에 button도 추가하기 위해서 span으로 만든다
    li.appendChild(span);    
    
    /** 
    ToDo는 입력받은 value대로 각각 한 줄씩 존재한다.
    input의 현재 value를 새로운 변수에 복사하고 있다. 
    복사 한 것이므로 다음에 input에 뭘해도 아무 지장이 없다.
    */ 
    const newTodo = toDoInput.value; 

    // todo Input을 비어 있는 상태로 만들어 준다.
    toDoInput.value = "";   
    
    // paintToDo에 newTodo를 인자로 주면서 호출한다.
    paintToDo(newTodo); 
```
- 그 외 해결사항
  - form이 submit 후 새로고침 되지 않도록 기본동작 막기 - preventDefault( ) 사용
  - todo를 지우는 버튼도 만들어 보자.
  - 새로고침 뒤에도 입력한 todo가 사라지지 않도록 만들자.


<br/>    
<br/>
<br/>

> 🌱 **Delete ToDos**  

👉  todo 삭제 버튼 만들기
- 조건
  - 이 버튼은 event를 수신해야 한다.
  - append는 마지막에 넣어주어야 한다. 
    ("todo list + 삭제버튼"이 리스트의 한 쌍이다. 각자 다 만든 후 li에 append!)
- 삭제 버튼 만들기
  - 버튼 태그 만들기 → 안에 들어갈 요소 넣기 (del, x) → 이벤트 수신할 수 있게 설정
```js
    function paintToDo(newTodo) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = newTodo;

      const button = document.createElement("button");    //button 만들기
      button.innerText = "❌";                            // button 안에 x 이모티콘 넣기
      button.addEventListener("click", deleteToDo);       // 버튼 이벤트 수신

      li.appendChild(span);                               
      li.appendChild(button);                             
      toDoList.appendChild(li);                          
    }
```
- 요소를 삭제하는 deleteToDo 함수 만들기
  - 여러개의 todo중에 어떤 것을 지워야 할지 알아야 한다.
  - click이벤트를 console로 확인해보면 Path에서 버튼이 li에 포함되어 있는 것을 알 수 있다.  
- deleteToDo 코드
```js
    function deleteToDo(event) {                        
      const li = event.target.parentElement;          
      li.remove();
    }
```



<br/>    
<br/>
<br/>

 
> 🌱 **Save ToDos**  

👉  새로고침해도 사라지지 않도록 저장하기.
- toDos라는 이름의 빈 배열 선언하기


<br/>
<br/>
<br/>

[📌 목록으로](/README.md)
