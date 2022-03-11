// JS에서 HTML을 바꾸는 것을 해 볼 것이다.
// 오늘 배울 것을 매우X13 자주 쓸 것이다.!!😆

// console에 document.getElementById("title");

// const title = document.getElementById("title");

console.dir(title);     // dir : element를 더 자세히 보여준다. -> 좀 더 알아보자

// textCentex, innerText = "Grab me!"

// 우리가 하고 있는 것 = HTML을 가지고 오는 것, 근데 이 것을 JS에서 하고 있다! 🙊

title.innerHTML = "Got you";

// console.log(title.id);
// console.log(title.className);

// HTML에서 항목들을 가져오는 방법
// 1. document에서 항목들을 가지고 오는 것
//  2. document항목들을 변경하는 것

// 지난시간 ->HTMl코드와 HTML element를 JS로 접근하는 방법을 배웠다.

// 보통은 ID대신에 Class로 접근한다.

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);    //이건 array, hellos. 으로 뭔가를 가져올 수는 없다. 
// docment.getElementsByClassName
// docment.getElementsByTagName ("")
// docment.getElementsByName ("")