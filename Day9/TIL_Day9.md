📅 2022-3-17
## **💡 Day9 - (6.0 - 6.2강)** 

> 🎲 랜덤으로 명언, 배경 설정하기 (JS에서 만든 요소 Html에 추가하기)

<br/>
<br/>


> 🌱 **Array에 접근하기**  

👉 랜덤으로 값을 받기 위해서는 먼저 데이터가 담긴 Array에 접근하는 방법을 알아야 한다.
- 어떻게 첫 번 째 array안에 접근할 수 있을까?
  - 명언 10개가 담겨있는 quotes[ ]가 있을 때    
   → console.log(quotes[0])을 사용하면 된다.
- 명언이 10개이므로 index는 0 - 9 까지의 값이 존재한다.
  - 즉! 0 - 9까지의 값을 랜덤으로 받아오면 된다.    
   👉 어떻게 할 수 있을까? 랜덤 함수를 사용하면 된다!

<br/>    
<br/>
<br/>

> 🌱 **Math.random( )**  

👉  사용 시 0 - 1 사이의 값을 랜덤으로 얻을 수 있다.
- 우리가 필요한 숫자는 0 - 9 까지 인데, 어떻게 사용하면 될까? 🤔    
  → 💡 랜덤으로 나온 값에 * 10을 해주면 된다.    
- 0 - 9 까지의 값을 구했지만, 뒤에 소수점이 있다.    
  → 💡 올림 / 반올림 / 내림 해주면 된다.    
  - Math.round() → 반올림
  - Math.ceil() → 올림
  - Math.floor() → 내림
- 이 중에서 floor( )를 사용할 것이다.
- 예시 코드
```js
    const TodaysQuote = quotes[Math.floor(Math.random() * 10)];
```
- 개선 필요 사항
  - X 10 을 하면 항상 array에 data가 10개 인 것만 사용가능하다. 


<br/>    
<br/>
<br/>

> 🌱 **length 사용하기**  

👉  배열.length = 배열의 길이를 구해준다.
- length를 사용하면 data가 10개 인 것 외에 data가 추가되거나 삭제되어도 그 길이만큼의 랜덤 숫자를 얻을 수 있다.      
- 배열이 10개 일 때 랜덤 숫자는 10에 접근할 수 없다.  
  → 0 - 1 사이의 소수 * 10의 값이기 때문!    
  → 하지만 배열의 index는 **0부터** 시작되기 때문에 (최종 길이 -1) 까지의 값만 있으면 된다.
- 예시코드(명언)
```html
    <!-- html -->

    <div id="quote">
      <span></span>
      <span></span>
```

```js
    // js
    const quotes = [{
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",
      },
    ... // 생략, 총 10개 넣기
    ];

    const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = TodaysQuote.quote;
    author.innerText = TodaysQuote.author;
```

<br/>    
<br/>
<br/>

> 🌱 **랜덤 배경 넣기**  

👉  명언을 넣을 때와 같은 방법 사용
- 프로젝트 폴더에 img폴더 만들고, 랜덤으로 쓸 이미지 넣기
- 이미지 이름으로 배열 만들기
```js
    const images = ["0.jpg", "1.jpg", "2.jpg"];
```  
- 랜덤 함수 만들기
```js
    const chosenImage = images[Math.floor(Math.random() * images.length)];
```
- css 배경으로 적용하기 위해 만들어 두기
```css
    img {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: fadeIn 0.5s linear;
    }
```
- 랜덤 이미지를 배경으로 추가해주도록 js 설정하기
```js
    const bgImage = document.createElement("img");
    bgImage.src = `./img/${chosenImage}`;
```
- body에 img 추가하기
```js
    document.body.appendChild(bgImage);
```


<br/>
<br/>
<br/>


[📌 목록으로](/README.md)
