/* quiz */
/* #000000~#FFFFFF */
// 0123456789 abcdef
/* #?????? */
/* quiz. 랜덤 색상 입력받은 값만큼  5열 파렛트 만들기 */

/* 1. 랜덤 색상 만들기 */
const hex = [..."0123456789abcdef"];
//hex[0~15] // 0~15
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // min~max 사이의 랜덤한 정수
};

const getHexColor = () => {
  return `#${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}`;
};

console.log(getHexColor()); // #000000~#FFFFFF 사이의 랜덤한 색상

/* 2. 반복 횟수 입력받기 */
const howManyColors = Number(prompt("몇 개의 색상을 만들까요?")); // 입력받는 값은 숫자(정수)열

/* 3. 색상 배열 만들기 */
const section = document.createElement("section");
section.style.cssText =
  "width:100vw;height:100vh;display:grid;grid-template-columns: repeat(5, 1fr)";

document.body.append(section);

/* #000000 ~ #ffffff */

/* const hexColor = [..."0123456789abcdef"];
const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getHexColor = () => {
  return `#${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}${hexColor[randomInt(15, 0)]}`;
};
const section = document.createElement("section");
section.style.cssText = `width:100vw; display:grid; grid-template-columns: repeat(5, 1fr)`;
const user_counts = +prompt("박스 몇개?");
Array(user_counts)
  .fill(undefined)
  .forEach((x) => {
    const newBox = document.createElement("div");
    newBox.style.cssText = `height: 100px; background-color:${getHexColor()}`;
    section.append(newBox);
  });
document.body.append(section); */
