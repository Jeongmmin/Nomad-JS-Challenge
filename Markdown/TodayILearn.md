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