const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// 이때까지 한 것은 JS통해서 뭔가를 가져오기만 했다, JS에서 뭔가를 만들어서 그걸 html에 추가한 적은 없다

// 지금 해 볼 것이다.
// 목표 : html에 img만들것이다. <img src=""></img>

const bgImage = document.createElement("img");
console.log(bgImage);

bgImage.src = `./img/${chosenImage}`;

// body에 img 추가하기
document.body.appendChild(bgImage);

// function setBackground() {

// }
