// JS에서 CSS파일을 통해서 CSS 조작하기 - element에서 class네임 변경, 제거, 추가
// (JS에서 바로 style을 바꾸는 것은 바람직하지 않다.)

/** css에 코드추가
 * body {
    background-color: beige;
}

h1 {
    color: cornflowerblue;
}

.active {
    color: tomato;
}
 */ 

const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() { 
//     h1.className = "active";
// }

// 더 적은 코드로 같은 결과를 얻었으니 더 좋은 코드라고 할 수 있다.

// 진짜 원하는 것 : 클릭하면 blue -> tomato, tomato -> blue
// function handleTitleClick() {
//     if( h1.className === "active") {
//         h1.className="";
//     }else {
//         h1.className = "active";
//     }
// }
/** active라는 string을 두 번 쓰고 있다 => error의 소지가 있음 */


// 더 개선된 버전 - 코드를 깔끔하게
function handleTitleClick() {

    const clickedClass = "clicked"  // 이렇게 변경하면 한 번만 복붙하면 되서 error가능성을 줄여주고, 변수를 잘못쓰게 된다면 console에서 알려주므로 실수 확률이 줄어든다.

    if( h1.className === clickedClass) {
        h1.className="";
    }else {
        h1.className = clickedClass;
    }
}

// 만약 h1에 class가 원래 존재한다면? ex. sexy-font
/**event인 click이 실행되고 나면 font가 class에서 사라져서 font적용이 안된다.😱 
 * className -> class 전체를 교체해 버린다.
 * 
 * 다른방법 필요하다.
 * 
 * class를 add하고 싶음 -> 다음 시간에
*/


h1.addEventListener("click", handleTitleClick);