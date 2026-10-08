// throw new TypeError("ㄹㅇ");

/* const arr = [1, 2, 3, 4, 5];
arr.toUpperCase(); // TypeError: arr.toUpperCase is not a function

const test = (arr) => {
  arr.people.toUpperCase(); // TypeError: Cannot read properties of undefined (reading 'toUpperCase') 타입이 이상해요!
}; */

/* ReferenceError */
/* const a = 1;
b.toUpperCase(); // ReferenceError: b is not defined 변수 선언을 안 했어요 */

const toAge = (v) => {
  const n = Number(v);
  if (Number.isNaN(n))
    throw new Error("숫자로 변환할 수 없는 값이 들어왔습니다.");
  if (n < 0) throw new Error("나이는 음수가 될 수 없습니다.");
  if (!Number.isInteger(n)) throw new Error("나이는 정수여야 합니다.");
  return n;
};

/* 외부랑 연결되는 코드에서 자주 쓰임 try...catch [fetch] */

try {
  toAge("a");
  toAge(-1);
  toAge(1.5);
  toAge(10); // 10
} catch (e) {
  console.log(e); // 오찬식이
  console.log(" 에러 펑펑");
} finally {
  console.log("무조건 실행");
}
