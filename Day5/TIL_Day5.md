📅 2022-3-11
## **💡 Day5 - (3.6 - 3.8강)** 

> JS를 통해서 CSS를 조작하는 여러가지 방법을 배웠다.😊 

<br/>
<br/>


> 🌱 **CSS in Javascript 1️⃣**  

👉 JS안에서 style로 CSS에 접근하여 조작하는 방법
- 예제 코드
```js
    const h1 = document.querySelector("div.hello:first-child h1");
    
    function handleTitleClick() {           

        // getter - 값을 가져옴
        console.log(h1.style.color);
        
        // setter - 값을 설정함
        h1.style.color = "cornflowerblue";
        
        console.log(h1.style.color);
    }

     // console결과 : 처음은 빈칸으로 나오고, 그 다음부터는 blue로 나온다.🙋🏻‍♀️
```
- 목표 ❓
    - 글자를 누르면 🔵, 한번 더 누르면 🟠색으로 변하게
```js
    function handleTitleClick() {           
        if(h1.style.color === "cornflowerblue") {
            h1.style.color = "tomato";
        }else {
            h1.style.color = "cornflowerblue";
        }
    }
    
    h1.addEventListener("click", handleTitleClick);
```
- 조금 더 발전 된 버전 (변수에 값 저장하기)
```js
    function handleTitleClick() {           
        const currentColor = h1.style.color;
        let newColor;   // new color는 아무것도 없는 비어있는 변수
        
        if(currentColor === "cornflowerblue") {
            newColor = "tomato";
        }else {
            newColor = "cornflowerblue";
        }
        h1.style.color = newColor;  
        
        👆

        /** 
             📌 조건문까지만 실행하면 우리 h1에게는 아무일도 일어나지 않는다. 
            따라서 값을 할당해주어야 한다.
        */ 
    }


    h1.addEventListener("click", handleTitleClick);
```

<br/>
<br/>


> 🌱 **CSS in Javascript 2️⃣**  

👉 element에서 className 변경, 제거, 추가 하는 방법(매우 추천되는 방법은 ❌)
- 예시코드 - 클릭 시 글자색상 변경
```css
    /* CSS코드 */

    h1 {
    color: cornflowerblue;
    }

    .active {
        color: tomato;
    }
```
```js
    // JS코드
    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() { 
    h1.className = "active";
    }

    h1.addEventListener("click", handleTitleClick);
    // 결과 : 클릭 → 글자색이 🔵 → 🟠
```
- 목표 ❓ → 클릭하면 🔵 → 🟠 되고, 다시 클릭하면 🟠 → 🔵 되도록!
```js
    function handleTitleClick() {
        if( h1.className === "active") {
            h1.className="";
        }else {
            h1.className = "active";
        }
    }

    h1.addEventListener("click", handleTitleClick);
    /** 
    결과 : 목표대로 동작함, 
    but❗ active라는 string 반복사용 => error의 소지😱    
    */ 
```
- 🔥 개선된 버전 🙋🏻‍♀️ - 조건문 사용 ➕ Class를 변수로 적용
```js
    function handleTitleClick() {

        const clickedClass = "clicked"  
        /** 이렇게 변경! 👉 한 번만 복붙하면 되서 error가능성 ↓, 
         또한 변수를 잘못쓰면 console에서 알려주게 됨 :  실수 확률 ↓
        */ 

        if( h1.className === clickedClass) {
            h1.className="";
        }else {
            h1.className = clickedClass;
        }
    }
```
- ClassName의 문제점 ⁉ 😱
    - 만약 element에 이미 class가 존재할 경우   
      → event 실행후에는 기존의 class가 사라져버린다.
```html
    <div><h1 class="sexy-font">Click me!</h1></div>
    <!-- 여기에 클릭 시 className이 "cliked"가 되는 코드를 실행하면 -->
    👇
    <div><h1 class="clicked">Click me!</h1></div>
    <!-- 이렇게 되어버린다😥 → 다른 방법 필요함❗-->
```

<br/>
<br/>


> 🌱 **CSS in Javascript 3️⃣**  

👉 Class 전체를 교체하는 것이 아닌 원래 상태에 추가하는 방법 
- ✨**ClassList**✨
    - element의 classs내용물을 조작하는 것을 허용🙆‍♀️
    - 'contains' 쓸 수 있다 → class가 포함되어 있는지 확인
```js
    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() {

        const clickedClass = "clicked";  

        if( h1.classList.contains(clickedClass)) {
            h1.classList.remove(clickedClass);
        }else {
            h1.classList.add(clickedClass);
        }
    }

    /** 
        이제 font class는 그대로 적용된 상태에서
        "clicked" class도 적용가능하다.
    */
```
- 최종 Upgrade 버전 👀 → **toggle** 사용
    - 토큰을 **toggle** 한다 : 토큰이 있으면 제거, 없으면 추가  
      ex. 불 끄기 - 켜기, 스마트폰 Lock - Unlock
```js
    function handleTitleClick() {
        h1.classList.toggle("clicked");
    }

    // 매우 간단하게 동일한 기능 실행가능🙊
```
- 물론 toggle을 먼저 배워도 좋았겠지만, 앞의 기능을 알아야 toggle의 편리함을 강렬하게 느낄 수 있다.🤗

<br/>
<br/>
<br/>


[📌 목록으로](/README.md)
