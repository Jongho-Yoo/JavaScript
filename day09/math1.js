/* quiz */
/* #000000~#FFFFFF */
// 0123456789 abcdef
/* #?????? */

const hex = [..."0123456789abcdef"];
//hex[0~15] // 0~15
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // min~max 사이의 랜덤한 정수
};

// console.log(hex[randomInt(15, 0)]);  // 0~f 사이의 랜덤

const getHexColor = () => {
  return `#${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}`;
};

console.log(getHexColor()); // #000000~#FFFFFF 사이의 랜덤한 색상
