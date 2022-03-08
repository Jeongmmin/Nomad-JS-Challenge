const playerName = "jm";

const palyerPoints = 121212;

const playerCool = true;

const playerRich = "little bit";

// 앞의 것과 느낌이 다르다 -> player.name player.points player.cool 이런 느낌이 더 좋다

// const player = ["jm", 1212, true, "little bit"]; -> 의미를 명확하게 알기 어렵다


// make object
// {} 안에서는 = 대신 : 사용 다음 프로퍼티를 위해서 ,  사용
const player = {
    name: 'jm',
    points: 121212,
    cool: true,
    rich: "little bit",
}

console.log(player);
console.log(player.name);

// player.name 처럼 console.log를 쓰고 있다 그 말은 console도 객체라는 의미

// 하지만 이것은 list가 아니다, list는 모두 동일한 값을 가지기 때문
// ex. 한 주의 요일 = [월~일] -> 안 의 모든 내용이 한 주의 요일을 의미하는 지 알 수 있음
//     장보기 리스트 = [사과, 피자, 감자] -> 안의 모든 내용이 장보기 리스트임을 알 수 있음
// 하지만 object => player만 보면 안의 내용이 다 다름, 그냥 jm, 1212만 보고는 뭔지 알 수 없음
// 따라서 player.name player.points 라고 해야 의미를 알 수 있다.

console.log(player["name"]);    // = console.log(player.name);

console.log(player);
player.cool = false;
console.log(player);

// 위 둘의 내용이 다름
// const인데 왜 결과가 다른가? const player = objcet 이다. 따라서 안 의 내용을 바꾸어도 여전히 player는 object이다.
// object의 안의 내용을 바꾸는 것은 상관없음

player.lastName = "potato";
console.log(player);
// property를 추가할 수도 있다.

// 설명이 필요없는 것 -> array, 설명이 필요한 것은 -> object