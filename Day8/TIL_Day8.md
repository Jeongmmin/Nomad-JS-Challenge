📅 2022-3-16
## **💡 Day8 - (5.0 - 5.3강)** 

> ⏱ 타이머 만들기

<br/>
<br/>


> 🌱 **Interval vs Timeout**  

👉 둘의 사용법과 차이점에 대해서 알아보기
- Interval
  - 매번 일어나야 하는 일에 사용
  - JS에 이미 내장되어 있는 함수
  - **setInterval(함수명, 반복될 시간(ms))** 으로 사용한다. 
- Timeout 
  -  한 번 실행 후 반복되지 않음
  - 설정한 시간 뒤에 한 번 실행된다. 
  - **setTimeout(함수명, 실행될 시간(ms))** 으로 사용한다.
- [🔗 Date 관련 인스턴스 메서드 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
  - ex) getDay, getFullYear, getHours, getMinutes, getSeconds...
- 👉 타이머에는 setInterval함수 사용할 것이다.
<br/>    

- 예시코드
```js
    setInterval(getClock, 1000)  // 1초 마다 계속 실행

    setTimeout(getClock, 5000)  // 5초 뒤 한번 실행
```
<br/>    

<br/>
<br/>


> 🌱 **현재 시간 표시하기**  

👉 본격적으로 현재 시간, 날짜 data 가져오는 방법 알아보기
- 시간 가져오기
  - getHours, getMinutes, getSeconds를 사용
- 날짜 가져오기
  - new Date() 사용
  - new 붙이는 이유?    
    : 그냥 date( ); => new date( );를 쓴 것을 그대로 string으로 만든 것,    
     따라서 gethours같은 property를 사용할 수 없다!
```js
    // new 사용하는 이유?

    date( ); === new date( ).toString();
```
    
- 예시 코드
```js
  function getClock() {
    // 날짜
    const date = new Date();
    // 시, 분, 초 분리
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  setInterval(getClock, 1000);
```


- 개선할 요소 🤔
  - 시간 표시가 한 자리 일때 01, 02, 03 이런 식으로 보이게 만들고 싶다.
  - 새로 고침 하면 1초 뒤에 시간이 표시된다.


<br/>
<br/>


> 🌱 **PadStart**  

👉 시간 표시 01, 02, 03 같이 보이도록 수정하기
- PadStart
  - 가지고 있는 string을 보다 길게 만들어야 할 때 사용
  - 사용법 :  padStart(가져야할 자리수, "빈자리에 채우고 싶은 숫자 또는 문자")
  - 💡 주의사항    
   : padStart는 string에만 사용가능 -> number는 string으로 변환해야 한다. → String(변환할 숫자)
- 예시코드
```js
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
```
- hours, minutes, seconds가 string으로 변환 됐으므로 clock에 넣은 변수의 형태도 변환된다.
```js
    // 변환 전
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    // 변환 후
    clock.innerText = `${hours}:${minutes}:${seconds}`;
```
- ➕ 추가로 배운 것 
- PadEnd : 가진 string뒤의 자리를 채울 때 사용
- string길게 만들 때 **삼항 연산자**를 사용하는 경우도 있음


<br/>
<br/>
<br/>    

> 🌱 **페이지 로드 되는 순간 타이머 시작되도록 설정하기**  

👉 setInterval만 쓰면 1초 뒤에 타이머가 동작된다. 이 문제를 해결해보자
- 해결방법
  - setInterval이 시작 되기 전에 getClick 함수를 한 번 더 호출해 준다.
 
- 최종 코드
```js
    const clock = document.querySelector("#clock");

    function getClock() {
        const date = new Date();
        
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }


    getClock();
    setInterval(getClock, 1000)
```




<br/>
<br/>
<br/>


[📌 목록으로](/README.md)
