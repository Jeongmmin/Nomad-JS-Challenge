// class 전체를 교체하는 것이 아닌 원래 상태에 추가하는 방법 - classList
// classList - element의 classs내용물을 조작하는 것을 허용
// classList는 contains 쓸 수 있다. = class가 포함되어 있는지 확인

const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {

//     const clickedClass = "clicked"  

//     if( h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     }else {
//         h1.classList.add(clickedClass);
//     }
// }

// 이제 font가 적용되면서, 색상이 변경된다.

// 좀 더 발전되 버전 -toggle이용
// 토큰을 toggle 한다 : 토큰이 있으면 제거, 없으면 추가 / ex. 불 끄고 켜기, 스마트폰 lock-unlock
function handleTitleClick() {
    h1.classList.toggle("clicked");
}
// 매우 짧은 코드로 동일하게 실행가능🙊



h1.addEventListener("click", handleTitleClick);
