📅 2022-3-18
## **💡 Day10 - (7.0 - 7.8강)** 

> 📝 JS로 ToDo List 만들기

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
```js
    const toDos = [];
```       
- 새로운 todo가 생기면 toDos 배열에 추가되도록 설정
```js
    toDos.push(newTodo);
```
- localStorage에 toDos[] 저장하는 함수 만들기 
  (지난번 greeting처럼 string 형태로 저장해야 한다.)
```js
    function saveToDos() {
      localStorage.setItem("todos", JSON.stringify(toDos));
    }
```
- paintToDo(newTodo)뒤에 saveToDos 호출하기
```js
    saveToDos();
```
- 최종 코드
```js
    const toDos = [];

    function saveToDos() {
      localStorage.setItem("todos", JSON.stringify(toDos));
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;    
      toDoInput.value = "";
      toDos.push(newTodo);
      paintToDo(newTodo);
      saveToDos();
    }
```

<br/>    
<br/>
<br/>

> 🌱 **loading Todos**  

👉 localStrage에 저장된 todo list 가져오기
- 현재는 localStorage에는 저장되어 있지만, 화면에는 보이지 않는 상태이다.
- localStorage에 있는 string을 array로 다시 변환.
  - string 가져오기 → localStorage.getItem( )사용
- todos를 여러 번 쓰니까 실수를 줄이기 위해서 변수로 선언.
  - const TODOS_KEY = "todos";
-  savedToDos가 null일 가능성 고려해야 함.
- forEach 사용해서 각 list 화면에 뿌려주기.
  - js는 array에 있는 각각의 item에 대해 fuction을 실행할 수 있게 해준다.
  - parsedToDos는 배열이므로, forEach라는 것을 가지고 있다. 
    forEach는 item에 대해 함수를 실행할 수 있게 해준다.
- 💡 JS Tip!
  - 1번, 2번 방법은 동일한 표현법이다.
  - 2번 : 화살표 함수 사용방법
```js
    // 1번
    function sayHello(item) {
      console.log("this is the turn of", item)
    }
    parsedToDos.forEach(sayHello);

    // 2번
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
```
- 우리는 이미 todo list를 그리는 paintToDo( )가 있다.
  - paintToDo는 newItem이라는 인자가 필요한데 이 인자가 곹 localStorage에서 가져온 parsedTodo이므로 그냥 paintToDo만 forEach에 넣어주면 된다.
- loading Todos 코드
```js
    const TODOS_KEY = "todos";

    const savedToDos = localStorage.getItem(TODOS_KEY);
  
    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      parsedToDos.forEach(paintToDo);
    }
```
- 여기까지 했을 때 문제점❓
  - 이 상태는 새로 저장된 list만 localStorage에 저장하고 이전것은 지워버린다.
  - 이유?    
    시작시 항상 비어있는[ ]이라서 paintToDo를 호출 할 때마다 값을 덮어쓰기 한다.
```js
     const toDos = [];
```
  - 해결방안
    - let으로 바꿔서 업데이트 가능하도록 설정
    - localStorage에 이전 list가 있으면 toDos에 parsedToDos를 넣어서 전의 toDo를 복원.
- 수정 된 코드
```js
    let toDos = [];

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
```
- 추가로 해결할 문제 ❓
  - delete를 해도 새로고침하면 살아난다.
  - localStorage에서 삭제가 안 되었기 때문이다. 이 문제를 해결해보자.



<br/>
<br/>
<br/>

> 🌱 **Delete Todos 2**  

👉 삭제 버튼 누르면 localStrage에서도 삭제되도록 만들기.
- 어떤 todos text가 지워지는지 알아야 한다. 
  - todos를 만들 때 id를 주도록 만들자
  - 랜덤 id 만들기 -> Date.now() 사용 (todo가 만들어 질때의 날짜와 시간)
  - 이전: 사용자가 적어둔 text를 데이터베이스로 push
  - 현재 : object를 데이터베이스로 push
```js
    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value; 
      const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
      saveToDos();
    }
```
- newToDoObj가 됐으니까 paintTodo의 내용을 조금 변경해주어야 한다.
```js
    function paintToDo(newTodo) {
      const li = document.createElement("li");

       // 각 list에 id값을 준다.
      li.id = newTodo.id;

      const span = document.createElement("span");

       // 이렇게 해주지 않으면 화면에 object형태로 표시된다.
      span.innerText = newTodo.text;

      const button = document.createElement("button");
      button.innerText = "❌";
      button.addEventListener("click", deleteToDo);
      li.appendChild(span);
      li.appendChild(button);
      toDoList.appendChild(li);
    }
```
- 이제 x 버튼을 누를 때 그 list의 id를 얻을 수 있으면 localStorage에서도 삭제가 가능
- array에서 element 삭제하는 방법?   
  👉🏻 filter 사용
  - 실제로 element를 array에서 지우는 것이 아니라 지우고 싶은 item을 뺴고 새 array를 만든다. (매우 중요✨)
  - filter(함수)의 형태로 사용
  - filter는 forEach처럼 각 item을 넣어서 함수를 호출한다. 
  - array의 item을 유지하고 싶다면 filter안의 함수는 반드시 true를 리턴해야만 한다.
  - false를 리턴한다면 새 array에 false를 리턴한 item은 들어가지 않는다.
- 이 개념으로 localStorage에서도 삭제되도록 만들어보자.
  - 버튼을 클릭할 때마다 list의 id를 얻을 수 있다. 
  - array에 있는 item의 id !== 클릭 된 id => 새 array에 추가되도록 filter를 설정
```js
    toDos = toDos.filter((toDo) => toDo.id !== li.id);
```
- 그런데 여기까지 하면 문제가 발생한다.    
  👉🏻 변수의 type 때문에 제대로 동작하지 ❌
  - li의 id는 string, 이것을 number로 바꾸어주어야 한다.
  - 그 다음 새로 만들어진 array를 toDos에 업데이트 해준다.
```js
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
```

<br/>
<br/>
<br/>

> 🌱 **Todo List 완성 버전**  

👉 전체적으로 해결 방안이 적용된 코드

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

    const TODOS_KEY = "todos";

    let toDos = [];

    function saveToDos() {
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
      const li = event.target.parentElement;
      li.remove();
      toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
      saveToDos();
    }

    function handleToDoSubmit(event) {
      event.preventDefault();
      const newTodo = toDoInput.value;
      toDoInput.value = "";
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
      toDos = parsedToDos;
      parsedToDos.forEach(paintToDo);
    }
```


<br/>
<br/>
<br/>

[📌 목록으로](/README.md)
