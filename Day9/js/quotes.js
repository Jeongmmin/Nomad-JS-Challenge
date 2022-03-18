const quotes = [{
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant",
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
    },
    {
        quote: "Laughter is timeless, imagination has no age, dreams are forever.",
        author: "Walt Disney",
    },
    {
        quote: "Only I can change my life, no one can do it for me",
        author: "Carol Burnett",
    },
    {
        quote: "Make money your god and it will plague you like the devil.",
        author: "Henry Fielding",
    },
    {
        quote: "Life-transforming ideas have always come to me through books.",
        author: "Bell Hooks",
    },
    {
        quote: "Only I can decide how i feel. So today, I'll choose happiness today.",
        author: "Alice in Wonderland",
    },
    {
        quote: "Put yourself on view. This brings your talents to light.",
        author: "Baltasar Gracian",
    },

    // 인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다."
    // 인생은 내면으로부터 나온다. 당신이 내면을 바꿀 때, 삶은 외부로 바뀐다.
    // 일을 시작하는 방법은 말하는 것을 멈추고 행동으로 옮기는 것이다.
    // 기회는 일어나는 대신 만드는 것이다.
    // 매일 두려운 일을 한가지 하세요.
    // 내 인생을 바꾸는 사람은 자신뿐입니다. 아무도 대신해 줄 수 없어요
    // 돈을 신 모시듯 하면 악마처럼 그대를 괴롭힐 것이다.
    // 나는 삶을 변화시키는 아이디어를 항상 책에서 얻었다.
    // 내 기분은 오직 내가 정할 수 있어. 그래서, 나는 오늘 행복을 선택할래.
    // 자신을 내 보여라. 그러면 재능이 드러날 것이다.
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 무작위성 randomness

// 어떻게 첫번째 array안에 접근 할 것인가?

// console.log(quotes[0]);

// function이 필요하다
// console.log(quotes[0-9]); 개념은 이런 식
/**
 * Math.ramdom = >1에서 0까지 랜덤 숫자 나온다.
 * 우리는 1~9까지 필요하니까 * 10을 해주면 원하는 결과를 얻을 수 있다.
 * Math.random() * 10
 *
 * 근데, 뒤에 소수점이 붙어있다. 우리는 이것이 필요없다.
 * => Math.round() - 반올림
 * => Math.ceil() - 올림
 * => Math.floor() - 내림
 *
 * floor() 사용
 */
// console.log(quotes.length);
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// 근데 10이라고 하면 항상 10개의 명언일 때만 사용가능 -> array의 길이를 반환해주면된다.
const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 랜덤 숫자는 10에 접근하지 못하지만 상관없다. 어차피 인덱스는 0부터 시작하니까 값-1까지의 값만 있으면 된다.
quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;