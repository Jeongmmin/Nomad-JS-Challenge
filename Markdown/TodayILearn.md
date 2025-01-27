# 📓 Today I Learn - 바닐라 JS 크롬앱
``` 
 🔥 이 강의의 최종 목표 : Momentum 프로그램 클론코딩 하기  
 ```   


<br/>
<br/>
<br/>  

📅 2022-3-7
## **💡 Day1 - (1 ~ 2.0강)**  

> JS의 유래와 확장 가능성에 대해서 배웠다.  

- JS 🔍
    - 1995년 Brendan Eich이 단 10일만에 만든 언어, 무한한 확장성을 가지고 있다. ( = 오류도 많았음)
    - JS는 수 많은 사람들이 쓰는 언어이고, 브라우저에 내장되어 있으므로 따로 설치할 필요가 없다
    - BE의 언어는 매우 다양하지만, FE에서는 JS만 알면 커버 가능!
- ✨브라우저는 HTML, CSS, JS만 읽을 수 있다.   
- 개발자도구의 console을 잘 활용하도록 하자
- JS와 CSS만으로는 브라우저에 표시 할 수 없다 glue역할을 하는 html이 꼭 필요하다!
- cmd에서 폴더 생성하는 명령어  
    ```cmd
    "mkdir 폴더명"
    ```

<br/>
<br/>
<br/>
<br/>


📅 2022-3-8
## **💡 Day2 - (2.1 - 2.6강)** 

> JS의 변수, 타입, Array, Object에 대해서 배웠다.

    게으른 개발자가 되기 위해서 노력하자 → 반복 줄이기!👩‍💻  

- **🌱 변수**  
👉 variable, 변경 가능한 수  

    - ex. 2 + 3 or 2 * 3 같은 연산시 숫자를 바꿔야 할 일이 생기면 매번 수정해야 되는데 이 것은 비 효율적이다!🤔
    - 이 때 변수에 숫자를 저장하고 a + b 같은 형식으로 계산을 하면 변수만 바꾸면 되니까 좋은 방법이다!🤗
    - const, let을 통해서 변수를 선언한다.
    - 변경 가능성 X → const / 변경 가능성 있는 것 → let  =>  이것만 봐도 작성자의 의도가 파악가능하다.
    - JS는 10일만에 만들어서 패치가 많이 되었다. 패치 전에는 var라는 것이 존재했다.
    - var는 let과 const같은 규칙이 없어서 작성자의 의도를 파악하기 어렵고, 변하지 말아야 할 데이터가 변할 수 있어서 위험하다.😱
    - **📌 always const, sometimes let, never var!!! 📌**   

<br/>

- **🌱 변수의 타입**  
👉 number, string, boolean, null, undefined가 존재한다.

    ① number ⇒ integer → 2 / float → 2.0 가 존재하며 int + float = float 이다.  
    ② string ⇒ "" , '' 으로 표현가능하며 앞 뒤를 동일한 기호로 사용해야 한다.  
    ③ boolean ⇒ true | false ("true" 이렇게 쓰면 안 된다, 컴퓨터의 0 = false, 1 = true)  
    ④ null ⇒ '존재하지 않는다'라는 의미, '절대 자연적으로 생기지 않으며 우리가 variable안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것'  
    ⑤ undefined ⇒ 존재하지만 정의되지 않았다 라는 의미  

<br/>
   
- **🌱 Array [ ]**     
👉 하나의 variable안에 데이터의 list를 가지기 위한 목적으로 만들어졌다.      
    - 비 효율적 예시🙅‍♀️     
        - 반복 너무 많고, 원하는 변수를 찾기도 어려움
        ```js
            const tue = "tue";      // not good
            const wed = "wed";
            const thu = "thu";
            const fri = "fri";
            const sat = "sat";
            const sun = "sun";

            const daysOfWeek = " mon + tue + wed + thu + fri + sat + sun";      // not good
        ```   


    - 효율적 예시🙆‍♀️  
        - Array 이용하여 data 담기 → 반복↓ , 원하는 데이터 찾기 쉬움, 추가도 가능    
        ```JavaScript
            const daysOfWeek = [ "mon" , "tue" , "wed" , "thu" , "fri" , "sat"];     // good

            const toBuy = ["potato", "tomato", "apple"];

            // Get Item (fri?)
            console.log(daysOfWeek[4]);

            // Push Item
            daysOfWeek.push("sun");
            toBuy.push("kimbab");
        ```
<br/>

- **🌱 Object { }**    
👉 설명이 필요한 data들을 나열해야 할 때 사용    
    - Object가 필요한 예시 👀
        ```JavaScript
            const playerName = "jm";                // player라는 공통점이 있음
            const palyerPoints = 121212;
            const playerCool = true;
            const playerRich = "little bit";
            const player = ["jm", 1212, true, "little bit"];    // array 로는 명확한 의미를 알 수 없다.
        ```        
    - player라는 공통점과 각각의 의미를 같이 표현해 주어야 한다. ⏬

        ```javascript
            // Make object?

            const player = {
                name: 'jm',
                points: 121212,
                cool: true,
                rich: "little bit",
            };

            console.log(player);        // 전체 object 출력
            console.log(player.name);   // object의 name property를 출력
            console.log(player["name"]);
        ```
    - player.name 처럼 console.log를 쓰고 있다 그 말은 console도 객체라는 의미
    - 하지만 이것은 list가 아니다, list는 모두 동일한 값을 가지기 때문
        ```
            ex. 한 주의 요일 = [월 ~ 일] or 장보기 리스트 = [🍎, 🧅, 🥕]
            -> 안의 모든 내용이 요일 or 장보기 리스트 임을 알 수 있음

            하지만 player{ }만 보면 안의 내용이 다 다름, 그냥 jm, 1212만 보고는 뭔지 알 수 없음
            따라서 player.name player.points 라고 해야 의미를 알 수 있음.
        ```
    - const object인데 내용 수정 가능❓
        ```js
            console.log(player.cool);   // true
            player.cool = false;
            console.log(player.cool);   // false
        ```   
        - 위 둘의 내용이 다름, const인데 왜 결과가 다른가?🤔
        - const player = objcet 이다. 따라서 안 의 내용을 바꾸어도 여전히 player는 object이다.
        - 즉, object의 안의 내용을 바꾸는 것은 상관없음
    -  property를 추가할 수도 있다.
        ```js
            player.lastName = "potato";
            console.log(player);  
            
            /* 
               player = {
                   name: 'jm',
                   points: 121212,
                   cool: true,
                   rich: "little bit",
                   lastName: "potato"
               };
             /      
        ```
    - array vs object  
        > 설명이 필요없는 것 -> array, 설명이 필요한 것은 -> object

<br/>
<br/>
<br/>
<br/>


📅 2022-3-9
## **💡 Day3 - (2.7 - 2.16강)**
> 앞에서 배운 내용들을 복습하고, function(함수), argument(인수), return(반환 값), prompt, typeof, 조건문에 대해 배웠다. 

<br/>
<br/>

- **🌱 Function**  
👉 계속 반복해서 사용할 수 있는 코드 조각, 어떤 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해준다.  

    - function 없을 때 🙅‍♀️
        ```js
            console.log("Hello my name is 이름1");      // 불 필요한 반복 너무 많다.
            console.log("Hello my name is 이름2");
            console.log("Hello my name is 이름3");
            console.log("Hello my name is 이름4");
            console.log("Hello my name is 이름5");
            console.log("Hello my name is 이름6");
        ```   
        
    - function 있을 때 🙆‍♀️
        ```js
            function SayHello () {
                // function이 실행 될 때마다 반복 될 부분
                console.log("Hello!");
            };

            SayHello();             // 여러 번 호출 가능
            SayHello();
        ```   

<br/>
<br/>

- 🌱 **Argument**  
👉 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법  

    -  function 안에서 data를 받는 방법 ❓ → ( ) 안에 뭔가를 적는 것.  
         (첫 번째 예시처럼 console.log를 여러번 입력하지 않아도 argument만 바꿔서 간편하게 값을 불러 올 수 있다.)
        ```js
            function plus(potato, salad) {      // argument의 이름 꼭 a, b아니어도 가능😄
                console.log(potato + salad);
            }

            // 단, potato는 function밖에서는 접근할 수 없다.

            plus(5, 10);                    
            plus(1.333, 9898);
            plus(9898, 1.3333);
        ```  

<br/>
<br/>

- 🌱 **Return**  
👉 return은 function에서 값을 저장 해 주는 역할을 한다.  이 값은 return value가 된다.😲  

    - return 없을 때 🙅‍♀️  

        ```js
            // ex) 📲 계산기 함수

            const calculator = {
                add: function(a, b) {
                    console.log(a + b);
                },
                minus: function(a, b) {
                    console.log(a - b);
                },
                multi: function(a, b) {
                    console.log(a * b);
                },
                div: function(a, b) {
                    console.log(a / b);
                },
                powerof: function(a, b) {
                    console.log(a ** b);
                },
            };

            calculator.add(3, 4);       // console에 결과 나온다, 값이 저장되지는 않는 상태🤔
            calculator.minus(3, 4);
            calculator.multi(3, 4);
            calculator.div(3, 4);
            calculator.powerof(3, 4);
        ```  
        
    - return 있을 때 🙆‍♀️    

        ```js
            // ex) 📲 계산기 함수

            const calculator = {
                plus: function(a, b) {
                    return a + b;
                },
                minus: function(a, b) {
                    return a - b;
                },
                time: function(a, b) {
                    return a * b;
                },
                divide: function(a, b) {
                    return a / b;
                },
                power: function(a, b) {
                    return a ** b;
                },
            };

            // 이 결과들은 유기적으로 연결되어 있다. 이것이 console.log와 return의 차이

            const plusResult = calculator.plus(2, 3);
            const minusResult = calculator.minus(plusResult, 10);
            const timeResult = calculator.time(10, minusResult);
            const divideResult = calculator.divide(timeResult, plusResult);
            const powerResult = calculator.power(divideResult, minusResult);
        ```  
    - function에 return이 있을 때 변수에 function을 할당하면, function의 return이 변수에 저장된다.
        - 아래의 결과를 코드로 받고 싶다면 ❓  
        → '함수는 어떤 일을 수행하고 결과를 알려주는 것이다'라고 생각
        ```js
            // ex) 👀 한국나이 계산기

            const age = 96;

            function calculateKrAge(ageOfForeigner) {
                return ageOfForeigner + 2;
            }
            

            const KrAge = calculateKrAge(age);      // return이 있다면 값을 저장 할 수 있다.

            console.log(KrAge);     // 만약 위의 코드에 return이 없으면 결과가 undefined로 나온다.
        ```  
    - 📌 아주 중요한 개념 ❗
        - 한 번 return하면 function은 끝난다.  
        ✔ return을 하면 function은 작동을 멈추고, 결과 값을 return하고 끝난다.
        ```js
            // 예시)

            const calculator = {
                plus: function(a, b) {
                    console.log("hello");       // 이 코드는 작동 ⭕
                    return a + b;
                    console.log("hello");       // 이 코드는 절대 작동하지 ❌ (return하면 함수는 끝나기 때문!)
                }
            }
        ```   

<br/>
<br/>


- 🌱 **Prompt의 사용과 typeof, parseInt**  
👉 매우 오래 된 JS, 사용자의 입력을 받는 함수
    - promt가 실행될 때는 js가 잠시 멈춘다. 이것은 매우 오래된 js, 요즘은 잘 쓰지 않고 custom한 promt를 직접 만드는 추세이다.
        ```js
            const age = prompt("How old are you?");

            console.log(age);   // 입력받은 age를 확인가능하다.
        ```
    - typeof
        - 사용 시 ( ) 안의 값의 타입을 알 수 있다.  
        ```js
            console.log(typeof "15", typeof (15));  // string, number
        ```   
    - parseInt
        - int 타입으로 변환해 주는 함수
        ```js
            const age = parseInt(prompt("How old are you?"));       //숫자가 아니면 NaN 나온다.

            console.log(typeof "15", typeof parseInt("15"));
        ```
    - NaN
        - = 숫자가 아니다 (Not A Number)
        - isNaN( ) → 어떤 것이 NaN인지 판별할 대 사용
        - isNaN( )은 true or false를 return 한다. (boolean)
        ```js
            const age = parseInt(prompt("How old are you?"));  

            if (isNaN(age)) {
                console.log("Please write a number");       // isNan = true
            }else {
                consoled.log("Thank you for write your age.");      // isNaN = false
            }
        ```

<br/>
<br/>


- 🌱 **Conditionals, 조건문**  
👉 조건이 여러가지 일 때, if와 else if, else 이용해서 조건문 사용  
    - 조건 한 가지씩 있을 때
        ```js
            const age = parseInt(prompt("How old are you?")); 

            if (isNaN(age)) {
                console.log("Please write a number");
            }else if (age< 18){
                console.log("You are too young");
            }else {
                console.log("You can drink");
            }
        ```         
    - 두 가지 이상의 조건을 동시에 만족해야 할 때
        - AND 👉 &&   → 둘 다 만족
        - OR  👉  ||  → 둘 중에 하나만 만족  

        ```js
            if (isNaN(age) || age < 0) {    // 사용자가 -수를 입력할 때 알고 싶다.
                console.log("Please write a real positive number");
            }else if (age< 18){
                console.log("You are too young");
            }else if(age >= 18 && age <=50) {
                console.log("You can drink");
            }else if (age > 50 && age <= 80) {
                console.log("You should exercise");
                // 👇 이 코드가 맨 끝에 있으면 위의 조건이 더 앞서기 때문에 실행되지 않는다.
            }else if (age === 100) {                            
                console.log("Wow you are wise")
            }else if (age >80) {
                console.log("You can do whatever you want.")
            }
        ```
    - =와 ===와 !==
        - = : 값 을 할당
        - === : 값, 타입이 같다
        - !== : 값, 타입이 다르다

<br/>
<br/>
<br/>
<br/>


📅 2022-3-10
## **💡 Day4 - (3.0 - 3.5강)** 

> 본격적으로 HTML과 JS를 연결하는 방법에 대해서 배우고, JS에서 HTML을 조작하는 방법에 대해서 배웠다.😆  

<br/>
<br/>


- 🌱 **JS 사용하는 이유 ❓**  
👉 HTML과 상호작용 하기 위해서
    - JS는 HTML의 element들을 자신의 방식으로 조작가능하다.
    - JS로 HTML을 조작하면 원래 HTML파일에 영향을 주지 않고 독립적으로 조작할 수 있다.

<br/>
<br/>


- 🌱 **Document는 Object ❗**  
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


- 🌱 **JS에서 HTML 조작하기 ⁉**  
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


- 🌱 **Events**  
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


- 🌱 **Event 사용방법**  
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
<br/>


📅 2022-3-11
## **💡 Day5 - (3.6 - 3.8강)** 

> JS통해 CSS를 조작하는 여러가지 방법을 배웠다.😊 

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
- 물른 toggle을 먼저 배워도 좋았겠지만, 앞의 기능을 알아야 toggle의 편리함을 강렬하게 느낄 수 있다.🤗
<br/>
<br/>
<br/>
<br/>

📅 2022-3-11
## **💡 Day6 - (4.0 - 4.3강)** 

> Form이 제출되는 이벤트가 발생될 때 일어나는 일과, 브라우저의 기본동작을 막는 방법, locaslStorage에 값 저장하는 방법에 대해서 배웠다.

<br/>
<br/>


> 🌱 **Input values**  

👉 