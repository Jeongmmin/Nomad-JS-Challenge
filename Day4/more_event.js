/**event를 사용하는 방법은 2가지가 있다.
 * 1. 첫번 째 방식 : title.addEventListener("mouseleave", handleMouseLeave);
 *      이 방법은 나중에 removeEventLister로 event를 삭제할 수 있다.
 * 
 * 2. 두번 째 방식 : title.onclick = handleMouseLeave;
 * 
 * 
 */

/** web APIs 확인할 수 있는 주소 -> https://developer.mozilla.org/ko/docs/Web/API/Window */

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

window.addEventListener("resize", handleWindowResize);

/** body는 특별한 요소이므로 바로 가져올 수 있지만 document.div 이런식은 안된다.
 * body, head, title 만 가능!, 다른 것들은 querySelector 등으로 가져와야 한다.
 */
// clipboard에 관한 event - copy, cut, paste
function handleCopy() {
    alert("Copier!")
}

window.addEventListener("copy", handleCopy);


// wifi에 대한 event 다뤄보기
// offline, online

function handleOffline() {
    alert("😱 SOS no wifi!")
}

function handleOnline() {
    alert("😎 Are goooood!")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);