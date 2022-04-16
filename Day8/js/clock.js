// const clock = document.querySelector("#clock");

// Intervals와 timeout에 대해 알아보자

/**interval : 매번 일어나야 하는 무언가를 의미, ex) 2초 마다
 * 
 * 
 * 
*/

// 이 함수를 2초에 한 번씩 실행하고 싶다 => setInterval이용
// function sayHello() {
//     console.log("hello");
// }

// 5초에 한 번씩 sayHello함수 실행하라는 의미
// setInterval(sayHello, 5000)     // 함수이름, 일어날 시간(ms)

// 2번째 setTimeout

// 5초뒤에 한번 실행 됨
// setTimeout(sayHello, 5000)     // 함수이름, 일어날 시간(ms)

// 최종목표, 시계 보여주기
// 콘솔에 입력
// hello
// new Date()
// Wed Mar 16 2022 20:48:33 GMT+0900 (한국 표준시)
// const date = new Date();
// undefined
// date.getDate()
// 16
// date.getDay()
// 3

// new Date().getHours()
// 20
// new Date().getMinutes()
// 55
// new Date().getSeconds()
// 41

/**즉, 시계를 화면에 띄우고 싶다면 우리는 setInterval을 사용해서 1초에 한번 씩 시간이 업데이트 되도록 설정해야 한다.*/

// const clock = document.querySelector("#clock");

// function getClock() {
//     const date = new Date();
//     // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// setInterval(getClock, 1000);

/** 
 * 21:01:00 이런 식으로 00으로 하고 싶다. + 새로고침하면 1초 뒤에 실행된다.
 * 
 * 페이지가 load되자마자 업데이트되도록 변경하기
 * */ 

//  페이지가 load되자마자 업데이트되도록 변경하기 - getclock()추가하기
// getClock();
// setInterval(getClock, 1000)

// 숫자표시방식 바꾸기 02 03 04 이런식으로
// string이 최소한 2자가 되도록 설정 => padStart()사용 
// string.padStart(2, "0") => 최소 2자리로설정, 한 자리면 앞에 0 넣으라는 의미


const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    // 시, 분, 초 분리
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// date.getHours()는 number, padStart(2, "0")는 string에만 사용가능, String(date.getHours()라고 해야한다.)

getClock();
setInterval(getClock, 1000)

// 다음시간 전까지 명언, 작가 10개정도 가져오기


// 복습
/**
 * 기능 별로 파일 구분하기
 * 
 * Intervals vs timeout 의 차이
 * interval : 매번 일어나야 하는 일 / JS가 이미 내장하고 있는 함수 => setInterval(함수명, 반복될 시간(ms))
 * 
 * timeout : 반복되지 않음, 일정 시간 뒤에 실행된다. => setTimeout(함수명, 실행될 시간(ms))
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date 여기에 Date와 관련된 인스턴스 메서드가 나와있음
 * 
 * ex) getDay, getFullYear, getHours, getMinutes, getSeconds...
 * 
 * 현재 시각을 표시해 주기 위해서  getHours, getMinutes, getSeconds를 사용할 것이다.
 * 
    * new를 붙이는 이유는 그냥 date();를 사용해서 얻는 결과값은 new date();를 쓴 것을 그대로 string으로 만든 것이기 때문에 .gethours같은 property를 사용할 수 없다고 하네요.
    요약) date(); === new date().toString();

    타이머를 위해서는 setInterval과 같이 사용해야 계속 갱신되는 시간을 볼 수 있다.
    값을 쓸 때는 `` 백틱 사이에 ${값} 넣으면 된다.

    clock.innerText = `${hours}:${minutes}:${seconds}`; 이렇게 표현가능

    그냥 보기에는 좋아보이지 않음 한 자리 일때는 앞에 0을 붙여서 표현하고 싶다.
    => padStart 사용 padStart(가져야할 자리수, "빈자리에 채울 것") / 가지고 있는 string을 보다 길게 만들어야 할 때 사용
    padEnd()는 뒷자리에 하고 싶을 때,
    아래와 같이 표현한다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    📍padStart는 string에만 사용가능 -> number는 string으로 변환해야 한다. 삼항연산자도 사용하는 경우 있음

    getClock();
    setInterval(getClock, 1000)
    이렇게 한 이유 => 브라우저가 로드되면 시계를 바로 실행하고 그 다음부터는 interval로 실행
    (setInterval만 쓰면 로드되고 1초 뒤에 시계가 실행되기 때문)






 */