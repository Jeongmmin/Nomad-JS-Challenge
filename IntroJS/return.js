// return이 있는 calculator

const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    time: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    },
};

// 이 결과들은 유기적으로 연결되어 있다. 이것이 console.log와 return의 차이
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.time(10, minusResult);
const divideResult = calculator.divide(timeResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

//function에 return이 있을 때 변수에 function을 할당하면, function의 return이 변수에 저장된다.

// 아주중요한 개념📌 -> 한 번 return하면 function은 끝난다.
// return을 하면 function은 작동을 멈추고, 결과 값을 return하고 끝난다.
// 예시)
const cal = {
    plus: function(a, b) {
        console.log("hello");       // 이 코드는 작동된다.
        return a + b;
        console.log("hello");       // 이 코드는 절대 작동하지 않는다. (return하면 함수는 끝나니까)
    }
}