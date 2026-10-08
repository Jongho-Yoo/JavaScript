/* 3대 에러 */
/* 
1.compile error : 문법적 에러 [실행 전] - 코드 수정 필요 *js,python 등은 컴파일러가 없어서, 문법상 맞는지 확인하는 과정이 없음 Interpreter 언어라서, 실행 시에 문법상 맞는지 확인함
2.runtime error : 실행 중에 발생하는 에러 [실행 중] 
3.context error : 문법상 맞지만, 실행 시에 발생하는 에러 [실행 후] ([예시] 0으로 나누기, 없는 변수 호출 등)
*/

/* 에러 : 뭔가 잘못됨 */
/* 테스트 할 때, 버그 잡을 때 사용하는 문법*/

/* const a = new Error("아아 시켰는데 뜨아 나옴"); // Error e 대문자로
throw a; */

/* throw new Error("아아 시켰는데 뜨아 나옴"); // 보통 한 번에 붙여 씀 */

const toAge = (v) => {
  const n = Number(v);
  if (Number.isNaN(n))
    throw new Error("숫자로 변환할 수 없는 값이 들어왔습니다.");
  if (n < 0) throw new Error("나이는 음수가 될 수 없습니다.");
  if (!Number.isInteger(n)) throw new Error("나이는 정수여야 합니다.");
  return n;
};

// 올바른 함수명(toAge)으로 호출
try {
  console.log(toAge(10)); // 10
  toAge("a"); // Error: 숫자로 변환할 수 없는 값이 들어왔습니다.
} catch (e) {
  console.error(e.message);
}
