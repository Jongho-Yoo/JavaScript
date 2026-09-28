/* 유저에게 아이디 만들기 */

/* 조건  아이디 길이가 4~12글자 사이가 아니면 -> 길이를 4~12글자로 해주세요! 출력*/
/* 아이디에서 @,!,# 가 없으면 -> @,!,# 중 하나를 포함해주세요! 출력 */
/* 아이디에서 0번째에서 3번째 글자가 대문자가 아니면 -> 0번째에서 3번째 글자를 대문자로 변경해주세요! 출력 */
/* 위에 다 통과되면 아이디 완성! 출력 */

const id = window.prompt("아이디를 입력하세요");

const one = id.length;
if (one < 4 || one > 12) {
  console.log("길이를 4~12글자로 해주세요!");
}

const two = id.includes("@") || id.includes("!") || id.includes("#");

if (!two) {
  console.log("@,!,# 중 하나를 포함해주세요!");
}

/* const three = id.toUpperCase();

if (
  id[0] !== id[0].toUpperCase() || // 0번째 글자가 대문자가 아니면 
  id[1] !== id[1].toUpperCase() || // 1번째 글자가 대문자가 아니면
  id[2] !== id[2].toUpperCase() || // 2번째 글자가 대문자가 아니면  
  id[3] !== id[3].toUpperCase() // 3번째 글자가 대문자가 아니면
) {
  console.log("0번째에서 3번째 글자를 대문자로 변경해주세요!");
} */

if (one && two) {
  console.log("아이디 완성!");
}

/* 정답

const id = window.prompt("아이디를 입력하세요");
if(id.length >= 4 && id.length <= 12) {
  else if(!id.includes("@") || !id.includes("!") || !id.includes("#")) {
  console.log("@,!,# 중 하나를 포함해주세요!");
  else if (id.slice(0, 4) !== id.slice(0, 4).toUpperCase()) {
  console.log("0번째에서 3번째 글자를 대문자로 변경해주세요!");
  else {
    console.log("아이디 완성!");}
 */
