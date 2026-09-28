/* 타입 */
// 기본: string, boolean, number , undefined
// 참조: array, object, function  ++++ window[브라우저] ,document[html],elemnt(Tag)

/* window.confirm("확인하시겠습니까?"); // 확인 true, 취소 false
window.alert("경고창"); // 경고창
window.console.log("콘솔창에 출력"); // 콘솔창에 출력 줄여서 console.log("콘솔창에 출력"); */

/* const p = document.createElement("p"); // html에 p태그를 생성 */
/* const btn = document.createElement("button"); // html에 button태그를 생성 */
/* btn.innerHTML = "오늘은 수요일"; // 버튼에 글자 넣기
document.body.append(btn); // 버튼을 body에 붙이기 */

//div 태그로 만들고 - 오늘 날짜 넣기
// h1 태그로 만들고 - js & html 넣기
// 화면에 태그 나타나도록 하기

const div = document.createElement("div");
div.innerHTML = "20260909"; //div에 오늘 날짜 넣기
document.body.append(div); // div를 body에 붙이기

const h1 = document.createElement("h1");
h1.innerHTML = "JS & HTML"; // h1에 js & html 넣기
document.body.append(h1); // h1을 body에 붙이기
