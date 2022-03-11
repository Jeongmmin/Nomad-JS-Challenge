📅 2022-3-10
## **💡 Day4 - (3.0 - 3.5강)** 

📑 본격적으로 HTML과 JS를 연결하는 방법에 대해서 배우고, JS에서 HTML을 조작하는 방법에 대해서 배웠다.😆  

<br/>
<br/>


> 🌱 **JS 사용하는 이유 ❓**

👉 HTML과 상호작용 하기 위해서
    - JS는 HTML의 element들을 자신의 방식으로 조작가능하다.
    - JS로 HTML을 조작하면 원래 HTML파일에 영향을 주지 않고 독립적으로 조작할 수 있다.

<br/>
<br/>


> 🌱 **Document는 Object ❗** 

👉 document는 브라우저에 이미 존재하는 Object
- 콘솔 창에 document를 입력하면 긴 object임을 알 수 있다.  
- html을 JS의 형태로 볼 수 있다. = JS에서 HTML document Object로 부터 다양한 property를 가져올 수 있다🙊
- document안에는 매우 다양한 property가 존재한다. (ex. location, title, className ...)  

```
원래 Object에서는 property를 가지고 올 수 도 있고, 수정도 가능하다.🤔

📌 document는 Object, 즉, document도 안의 property를 조작할 수 있다.😲
    
    🔥 이것은 매우 중요한 포인트! 🔥
```

<br/>
<br/>


> 🌱 **JS에서 HTML 조작하기 ⁉**  

👉 HTML을 변경하지 않고 JS에서 조작하는 방법
- HTML에서 조작하려는 곳에 id, class 등을 설정한다.
- JS에서 document를 통해 항목들을 가져온다.
- document 항목들을 변경한다.
- ✔ property를 가져오는 대표적인 방법 (함수)
```
단, HTML과 JS에서 동일하게 표기되어 있는 요소만 가져올 수 있다 🔥
```
- getElementById( ) : id가 동일한 항목 중 첫번 째 요소를 가져온다.
- getElementByCalssName( ) : class가 동일한 항목을 가져온다.
- querySelector( ) : 괄호 안의 요소와 동일한 것을 가져온다. element를 CSS방식으로 검색 할 수 있다.🔍     
    (ex. .title, #title, .hello h1)
- querySelectorAll( ) : 괄호 안의 요소와 동일한 것을 모두 가져온다.  

<br/>
- 예시코드

```js
    const title = document.getElementById("title");     // title이라는 id의 항목을 가져온다.

    title.innerHTML = "Got you";        // title 항목의 내부 내용을 변경
```   
```js
    getElementByClassName(), getElementsByTagName(), getElementsByName() 👉 [] 를 반환!

    querySelector() 👉 첫 번째 요소 하나만 반환!, 주로 사용하는 함수

    const title = document.querySelector(".hello");
    const title = document.querySelector(".hello:first-child h1");  // 이런 것도 가능
    
```
    
<br/>
<br/>


> 🌱 **Events**  

👉 document의 함수인 event들을 이용하여 JS로 HTML을 조작할 수 있다.
- 📌 document는 HTML이 app.js를 load하기 때문에 존재하는 것이다!
- 만약 element의 내부가 궁금하다면 → console.dir( )을 이용하면 된다.  
object로 표시된 element를 보여준다.
```js
    console.dir(title);
    👇
    // 콘솔에서 볼 수 있는 것

    ex. onfocus, onclick, onmouseenter, onmouseleave ...
```
- object안의 내용을 바꿀 수 있지만, 전부 다 바꿀 수 있는 것은 아니다.   
- 우리가 listen하고 싶은 event를 찾는 가장 좋은 방법
    - 📌 방법1 ) 구글에 찾고 싶은 element의 이름 + mdn 이라고 검색 🔍   
                    ex) h1 html element mdn  
                    그 중에 Web APIs라는 문장이 포함된 페이지 찾기!  
    - 📌 방법 2 )  console.dir(h1)해서 on~ 으로 시작하는 property인 evnet를 관찰 가능  
- 대표적 종류
    - click, mouseenter, 입력을 끝내거나, 키보드 키누를 때, wifi 접속 해제될 때 ... 

```js
    // style변경 예시
    title.style.color = "blue";         // 이런식으로 사용
```     
- Event 등록하는 방법
```js
    title.addEventListener("동작");

    function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "green";
    }

    title.addEventListener("click", handleTitleClick);      // 함수를 2번 째 인수로 전달
```  
-  👆 위의 코드에서 function을 실행하지 않게 하는 것이 매우 중요!! 
    - (function( ) 이렇게 쓰면 안 됨🙅‍♀️)
```js
    // 함수 호출? 
    👉  function( )

    하지만 addEventListenr에서는 ( )로 호출하지 않는다.

    🤷‍♀️❓ 왜 그렇까? → 요소를 '클릭' 할 때 JS가 함수를 호출하게 만들고 싶은 것이지,  
        평소에 호출하려는 것이 아니다.

    h1.addEventListener("mouseleave", handleMouseLeave); 
    /*
    즉, 이 코드의 의미는
    누군가 h1을 클릭하면 handleMouseLeave 함수를 실행해! 
    라고 JS에게 알려주는 것 
    */
```  
- JS로 style을 변경할 수 는 있지만 , 이론적으로는 css에서 하는 것이 맞다❗  
    
<br/>
<br/>


> 🌱 **Event 사용방법**  

👉 event를 사용하는 방법에 대해서 알아보자!
- 📌 첫 번째 방식
    - 나중에 removeEventLister로 이벤트 삭제도 가능
```js
    // target.addEventLister("이벤트", 이벤트 함수명)
    title.addEventListener("mouseleave", handleMouseLeave);
```  
- 📌 두 번째 방식
```js
    // target.on이벤트 = 이벤트 함수명
    title.onclick = handleMouseLeave;
```
- [🔗 Web APIs 확인할 수 있는 주소](https://developer.mozilla.org/ko/docs/Web/API/Window)
- document에서 정의하지 않아도 바로 가져올 수 있는 요소
    - body, head, title(원래 존재하는 title 제목 부분)
```js
        // 예시
    function handleWindowResize() {
        document.body.style.backgroundColor = "tomato"
    }

    window.addEventListener("resize", handleWindowResize);
```  
- clipboard에 관한 event
    - copy, cut, paste
```js
    function handleCopy() {
        alert("Copier!")
    }

    window.addEventListener("copy", handleCopy);
```  
- wifi에 관한 event
    - offline, online
```js
    function handleOffline() {
        alert("😱 SOS No wifi!")
    }

    function handleOnline() {
        alert("😎 Are goooood!")
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
```
<br/>
<br/>
<br/>


[📌 목록으로](/README.md)
