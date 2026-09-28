const donchicken = {
  name: "돈치킨",
  location: "역삼역 어딘가",
  capacity: 30,
  isHoliday: false,
  menu: {
    main: "수육",
    sub: "막국수",
    side: "미역국",
  },
};

console.log(donchicken.location);
console.log(donchicken["location"]);

// 미역국 콘솔로 출력
console.log(donchicken.menu.side);
console.log(donchicken["menu"]["side"]);

donchicken.vip = "전수효"; // 추가
delete donchicken.menu.side; // 미역국 삭제
