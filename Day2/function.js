// fuction = 계속 반복해서 사용할 수 있는 코드 조각, 어떤 코드를 캡슐화 해서, 실행을 여러 번 할 수 있게 해준다.

// function 없을 때 -> not good
console.log("Hello my name is 이름1");
console.log("Hello my name is 이름2");
console.log("Hello my name is 이름3");
console.log("Hello my name is 이름4");
console.log("Hello my name is 이름5");
console.log("Hello my name is 이름6");

// function?
function SayHello () {
    // function이 실행 될 때마다 반복 될 부분
    console.log("Hello!");
};
function SayHello2 () {
    // function이 실행 될 때마다 반복 될 부분
    console.log("Hello my name is C!");
};

SayHello();
SayHello();
SayHello();
// alert(); 와 유사한 형태

// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법

// 목표
SayHello("lynn");

// const let의 차이 : let은 없데이트를 할 수 있다.

console.log(console); //console도 object

// alert()도 function

/** function 안에서 data를 받는 방법
 ()안에 무언가를 적는 것이다.* */ 

function plus(potato, salad) {
    console.log(potato + salad);
}

// potato는 function밖에서는 접근할 수 없다.

plus(5, 10);
plus(1.333, 9898);
plus(9898, 1.3333);

// const calculator = {
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     minus: function(a, b) {
//         console.log(a - b);
//     },
//     multi: function(a, b) {
//         console.log(a * b);
//     },
//     div: function(a, b) {
//         console.log(a / b);
//     },
//     powerof: function(a, b) {
//         console.log(a ** b);
//     },
// };

// calculator.add(3, 4);
// calculator.minus(3, 4);
// calculator.multi(3, 4);
// calculator.div(3, 4);
// calculator.powerof(3, 4);

// console.log가 아닌 return을 해보자., function이 나에게 결과를 제공하도록 만들자

// const calculator2 = {
//     add: function(a, b) {
//         alert(a + b);
//     },
//     minus: function(a, b) {
//         alert(a - b);
//     },
//     multi: function(a, b) {
//         alert(a * b);
//     },
//     div: function(a, b) {
//         alert(a / b);
//     },
//     powerof: function(a, b) {
//         alert(a ** b);
//     },
// };

// console.log(calculator2.add(2,3));      //alert 실행 후 undefined 된다.

// 조금 더 나은 방법을 만들어 보자
const age = 96;

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

// 위의 결과를 코드로 받고 싶다면?, 함수는 어떤 일을 수행하고 결과를 알려주는 것이다라고 생각

const KrAge = calculateKrAge(age);

console.log(KrAge);     // 위에 return이 없으면 결과가 undefined로 나온다.

// function안에서 무언가를 return하면 누군가 function을 실행할 떄 calculateKrAge(age); -> ageOfForeigner + 2;이것으로 대체한다.


function calculateKrAge2(ageOfForeigner) {
    ageOfForeigner + 2;
    
    return "hello";
}

const KrAge2 = calculateKrAge2(age);

console.log(KrAge2);

// function에 return이 있다면 return value(반환값)를 준다