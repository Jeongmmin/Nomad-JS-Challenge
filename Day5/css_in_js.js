// 목표? : title을 한 번 클릭하면 cornflowerblue, 다시 클릭하면 tomato색 되게하기

const h1 = document.querySelector("div.hello:first-child h1");



// function handleTitleClick() {           // 처음은 빈칸으로 나오고, 그 다음부터는 cornflowerblue로 나온다.
//      // getter
//     console.log(h1.style.color);
//     // setter
//     h1.style.color = "cornflowerblue";
//     console.log(h1.style.color);
// }

// 이제부터 할 것 - > 만약 h1의 컬러가 blue라면 tomato로 바꿔주세요 라고 명령할 것, tomato일 경우 반대

// function handleTitleClick() {           
//     if(h1.style.color === "cornflowerblue") {
//         h1.style.color = "tomato";
//     }else {
//         h1.style.color = "cornflowerblue";
//     }
    
// }


function handleTitleClick() {           
    const currentColor = h1.style.color;
    let newColor;   // new color는 아무것도 없는 비어있는 변수
    
    if(currentColor === "cornflowerblue") {
        newColor = "tomato";
    }else {
        newColor = "cornflowerblue";
    }
    h1.style.color = newColor;  // 조건문까지만 실행하면 우리 h1에게는 아무일도 일어나지 않는다. 따라서 값을 할당해주어야 한다.
}



h1.addEventListener("click", handleTitleClick);