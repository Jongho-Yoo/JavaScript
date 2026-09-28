/* 모험가 상점 */
/* 무기 선택: 검(15000), 활(13000), 지팡이(18000) */
/* 방어구 선택: 가죽갑옷(8000), 사슬 갑옷(9000), 판금갑옷(12000) */
/* 물약선택: HP포션(3000), MP포션(2000), 엘릭서(4500) */
/* 길드 등급: 브론즈(100%), 실버(90%), 골드(80%) */
/* 출력 예시: 용사님이 고르신 무기:? 방어구:? 물약:? 길드 등급: ? 최종 지불 금액: ? 골드 */

const rpgShop = {
  weapon: { sword: 15000, bow: 13000, staff: 18000 },
  armor: { leather: 8000, chainmail: 9000, plate: 12000 },
  potion: { hpPotion: 3000, mpPotion: 2000, elixir: 4500 },
  guildRank: { bronze: 1, silver: 0.9, gold: 0.8 },
};

const selectWeapon = window.prompt("무기를 선택해주세요 (sword, bow, staff)");
const selectArmor = window.prompt(
  "방어구를 선택해주세요 (leather, chainmail, plate)",
);
const selectPotion = window.prompt(
  "물약을 선택해주세요 (hpPotion, mpPotion, elixir)",
);
const selectGuildRank = window.prompt(
  "길드 등급을 선택해주세요 (bronze, silver, gold)",
);

addPrice =
  rpgShop.weapon[selectWeapon] +
  rpgShop.armor[selectArmor] +
  rpgShop.potion[selectPotion];
finalPrice = addPrice * rpgShop.guildRank[selectGuildRank];

console.log(
  `용사님이 고르신 무기: ${selectWeapon}, 방어구: ${selectArmor}, 물약: ${selectPotion}, 
  길드 등급: ${selectGuildRank}, 최종 지불 금액: ${finalPrice} 골드`,
);
