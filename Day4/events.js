const h1 = document.querySelector(".hello");

console.log(h1);

// h1.style.color = "blue"; 
function handleTitleClick() {
    console.log("h1 was clicked!");
    h1.style.color = "green";
}


h1.addEventListener("click", handleTitleClick);

/**  우리가 listen하고 싶은 event를 찾는 가장 좋은 방법은 -> 구글에 찾고 싶은 element의 이름
 * ex. h1 element의 이름을 mdn에 검색해보기 (h1 html element mdn) -> 그 중에서 Web APIs라는 문장에 포함된 페이지를 찾는다. (JS관점의 HTML이니까)
 * copy, paste도 감지 가능
 * 
 * 이 방식이 지루하다면 -> console.dir(h1)해서 on~ 으로 시작하는property인 evnet를 관찰할 수 있다.
 * 
*/

function handleMouseEnter() {
    h1.innerText ="Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

/**중요포인트!! 
 * h1.addEventListener("mouseleave", handleMouseLeave); 여기에서 handleMouseLeave()라고 해서 함수의 실행버튼을 누르지 않아도 된다
 * JS가 대신 실행버튼을 눌러 줄 것이기 때문에

 * h1.addEventListener("mouseleave", handleMouseLeave); 
이것의 의미는 누군가 h1을 클릭하면 handleMouseLeave 함수를 실행해 라고 JS에게 알려주는 것

JS로 style을 변경할 수 는 있지만 , 이론적으로는 css에서 하는 것이 맞다.
*/