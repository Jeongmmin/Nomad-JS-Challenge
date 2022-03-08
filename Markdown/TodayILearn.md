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
- ✨브라우저는 Html, Css, JS만 읽을 수 있다.   
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

- **변수**
    > variable, 변경 가능한 수  

    - ex. 2 + 3 or 2 * 3 같은 연산시 숫자를 바꿔야 할 일이 생기면 매번 수정해야 되는데 이 것은 비 효율적이다!🤔
    - 이 때 변수에 숫자를 저장하고 a + b 같은 형식으로 계산을 하면 변수만 바꾸면 되니까 좋은 방법이다!🤗
    - const, let을 통해서 변수를 선언한다.
    - 변경 가능성 X → const / 변경 가능성 있는 것 → let  =>  이것만 봐도 작성자의 의도가 파악가능하다.
    - JS는 10일만에 만들어서 패치가 많이 되었다. 패치 전에는 var라는 것이 존재했다.
    - var는 let과 const같은 규칙이 없어서 작성자의 의도를 파악하기 어렵고, 변하지 말아야 할 데이터가 변할 수 있어서 위험하다.😱
    - 📌 always const, sometimes let, never var!!! 📌   

<br/>

- **변수의 타입**
    > number, string, boolean, null, undefined가 존재한다.

    1️⃣ number ⇒ integer → 2 / float → 2.0 가 존재하며 int + float = float 이다.  
    2️⃣ string ⇒ "" , '' 으로 표현가능하며 앞 뒤를 동일한 기호로 사용해야 한다.  
    3️⃣ boolean ⇒ true | false ("true" 이렇게 쓰면 안 된다, 컴퓨터의 0 = false, 1 = true)  
    4️⃣ null ⇒ '존재하지 않는다'라는 의미, '절대 자연적으로 생기지 않으며 우리가 variable안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것'  
    5️⃣ undefined ⇒ 존재하지만 정의되지 않았다 라는 의미  

<br/>

- **Array [ ]**
    > 하나의 variable안에 데이터의 list를 가지기 위한 목적으로 만들어졌다.    
    - 비 효율적 예시🙅‍♀️  
        - 반복 너무 많고, 원하는 변수를 찾기도 어려움    
        ```JavaScript
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

- **Object { }**    
    > 설명이 필요한 data들을 나열해야 할 때 사용    
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
            console.log(player);            /* 
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
## **💡 Day3 - (2.7 ~ 2.16강)** (2022.3.9)
