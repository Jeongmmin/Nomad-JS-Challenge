// array 

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = " mon + tue + wed + thu + fri + sat + sun";      //not good

// const daysOfWeeks = [ mon , tue , wed , thu , fri , sat , sun];      // good


const daysOfWeek = [ "mon" , "tue" , "wed" , "thu" , "fri" , "sat"  ];     

console.log(daysOfWeek);

//  Get Item
// fri 데이터를 얻는방법, 5번째에 있지만 컴퓨터는 0부터 숫자를 세니까 4를 입력
console.log(daysOfWeek[4]);

daysOfWeek.push("sun");

console.log(daysOfWeek);

// array의 목적 : 하나의 variable안에 데이터의 list를 가지는 것

const toBuy = ["potato", "tomato", "apple"];

toBuy.push("kimbab");