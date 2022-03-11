// conditionals 조건문

// const age = prompt("How old are you?");

// promt가 실행될 때는 js가 잠시 멈춘다. 이것은 매우 오래된 js, 요즘은 잘 쓰지 않고 custom한 promt를 직접 만드는 추세이다.
// console.log(age, parseInt(age));

// typeof 이용해서 타입 알 수 있다.
console.log(typeof "15", typeof parseInt("15"));

// string -> integer
// parseInt()

// const age = parseInt(prompt("How old are you?"));       //숫자가 아니면 NaN 나온다.
// 함수는 내부에서 외부로 실행된다.
// console.log(age);

// part2. 무엇인가가 NaN인지 판별하는 방법 배우기 ->isNaN()이용
// console.log(isNaN(age));        // isNaN() 은 boolean을 return한다.

// if(condition){
//     // condition === true
// }else {
//     // condition === false
// }


const age = parseInt(prompt("How old are you?"));  

// if (isNaN(age)) {
//     console.log("Please write a number");
// }else {
//     consoled.log("Thank you for write your age.");
// }

// 조건이 여러개 일때
// else if 사용

// if (isNaN(age)) {
//     console.log("Please write a number");
// }else if (age< 18){
//     console.log("You are too young");
// }else {
//     console.log("You can drink");
// }

// 두 가지 조건 동시에 만족하기
// AND && OR ||  -> && 둘다 만족, || 둘 중에 하나만 만족
// else는 선택사항 꼭 없어도 된다.
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
}else if (age< 18){
    console.log("You are too young");
}else if(age >= 18 && age <=50) {
    console.log("You can drink");
}else if (age > 50 && age <= 80) {
    console.log("You should exercise");
}else if (age === 100) {                            // 이 코드가 맨 끝에 있으면 위의 조건이 더 앞서기 때문에 실행되지 않는다.
    console.log("Wow you are wise")
}else if (age >80) {
    console.log("You can do whatever you want.")
}

// 사용자가 -수를 입력할 때 알고 싶다.
// if (isNaN(age) || age < 0) { 추가

// = 는 값을 할당한다. === 는 값이 같은지 확인
// !== 는 아닐 때 라는 의미