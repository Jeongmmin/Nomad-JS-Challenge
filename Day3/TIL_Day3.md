📅 2022-3-9
## **💡 Day3 - (2.7 - 2.16강)**
📑 앞에서 배운 내용들을 복습하고, function(함수), argument(인수), return(반환 값), prompt, typeof, 조건문에 대해 배웠다. 

<br/>
<br/>

> **🌱 Function**  

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

> 🌱 **Argument** 

👉 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법  

-  function 안에서 data를 받는 방법 ❓ → ( ) 안에 뭔가를 적는 것.  
    (첫 번째 예시처럼 console.log를 여러번 입력하지 않아도 argument만 
    바꿔서 간편하게 값을 불러 올 수 있다.)
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

> 🌱 **Return**  

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
            console.log("hello");       /**
                                        이 코드는 절대 작동하지 ❌ 
                                        (return하면 함수는 끝나기 때문!) 
                                        */ 
        }
    }
```   

<br/>
<br/>


> 🌱 **Prompt의 사용과 typeof, parseInt**  

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


> 🌱 **Conditionals, 조건문** 

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

[📌 목록으로](/README.md)