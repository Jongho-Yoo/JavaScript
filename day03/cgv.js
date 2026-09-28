/* CGV 영화 예매 시스템 */
/* 좌석 선택: 일반(15000),라이트(13000),프리미엄(18000) */
/* 팝콘 선택: 일반(8000),캬라멜(9000), 치즈(9000) */
/* 음료 선택: 탄산(3000), 아이스티(2000), 커피(4500)*/
/* 멤버쉽 선택: 브론즈(100%),실버(90%),골드(80%) */

/* 고르신 좌석:? ,팝콘:? ,음료:? 총 금액: ? */

const choose = {
  seat: { standard: 15000, light: 13000, premium: 18000 },
  popcorn: { standard: 8000, caramel: 9000, cheese: 9000 },
  drink: { soda: 3000, icetea: 2000, coffee: 4500 },
  membership: { bronze: 1, silver: 0.9, gold: 0.8 },
}; // 한글 최대한 지양

const selectSeat = window.prompt(
  "좌석을 선택해주세요 (standard, light, premium)",
);
const selectPopcorn = window.prompt("팝콘을 선택해주세요 (standard, caramel, cheese)");
const selectDrink = window.prompt("음료를 선택해주세요 (soda, icetea, coffee)");
const selectMembership = window.prompt(
  "멤버쉽을 선택해주세요 (bronze, silver, gold)",
);

const addPrice =
  choose.seat[selectSeat] +
  choose.popcorn[selectPopcorn] +
  choose.drink[selectDrink];
const finalPrice = addPrice * choose.membership[selectMembership];

console.log(
  `고르신 좌석: ${selectSeat}, 팝콘: ${selectPopcorn}, 음료: ${selectDrink}, 총 금액: ${finalPrice}`,
);





