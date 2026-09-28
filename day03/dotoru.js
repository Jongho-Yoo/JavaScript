/* 
menu
블렌드 커피,280엔,size: s,m,l
아이스 커피,380엔,size: s,m,l
샌드위치,600엔, size: s,m,l
*/

//유저에게 도토루 메뉴를 고르고
// 사이즈 물어보기 [s,m,l]
// 멤버쉽 있는지 물어보고 [yes or no]

// 주문하신 메뉴 가격은 ~~ 입니다.
// s:그대로,m :10%붙고, l: 20% 붙음
// 주문하신 ~~ 메뉴 가격은 멤버쉽이면 10% 할인, 아니면 정가로 나타내기!
// 가격 나타내기

/* 내가 친거
const dotoruMenu = {
  블렌드커피: {
    price: 280,
    size: ["s", "m", "l"],
  },
  아이스커피: {
    price: 380,
    size: ["s", "m", "l"],
  },
  샌드위치: {
    price: 600,
    size: ["s", "m", "l"],
  },
};

const menu = window.prompt(
  "도토루 메뉴를 선택하세요: 블렌드커피, 아이스커피, 샌드위치",
);
const size = window.prompt("사이즈를 선택하세요: s, m, l");
const membership = window.prompt("멤버쉽이 있으신가요? (yes or no)");

// 사이즈에 따른 변수 설정
const sizePrice = dotoruMenu[menu].price;
size === "s" ? console.log(`${sizePrice} `)  
size === "m" ? console.log(`${sizePrice * 1.1} `)
size === "l" ? console.log(`${sizePrice * 1.2} `) 

const finalPrice = size === "s" ? sizePrice : size === "m" ? sizePrice * 1.1 : sizePrice * 1.2;

console.log(`주문하신 메뉴 가격은 ${finalPrice} 입니다.`);
 */






/* 정답



const menu =[
{ name: "블렌드커피", price: 280 },
{ name: "아이스커피", price: 380 },
{ name: "샌드위치", price: 600 }
] 


const selectNum = +window.prompt("도토루 메뉴 고르세요 1(블렌드커피), 2(아이스커피), 3(샌드위치)");
const size = window.prompt("사이즈를 선택하세요: s, m, l");
const membership = window.prompt("멤버쉽이 있으신가요? (yes or no)");

const membershipDiscountRate = membership == "yes" ? 0.9 : 1; // 삼항연산자 
const sizeRate = size == "s" ? 1 : size == "m" ? 1.1 : 1.2; // 삼항연산자 
const finalPrice = menu[selectNum - 1].price * membershipDiscountRate * sizeRate;

console.log(`주문하신 메뉴 가격은 ${menu[selectNum - 1].name}, 가격은 ${finalPrice} 입니다.`);


*/
