/* 엘리먼트 생성하고 꾸며주고 넣기! */

const newDiv = document.createElement("div");

/* newDiv.className = "yellow"; // className 속성에 "yellow"라는 이름을 넣어주기 */

newDiv.classList.add("yellow"); // classList.add() 메서드로 "yellow"라는 이름을 넣어주기
newDiv.classList.add("blue"); // classList.add() 메서드로 "blue"라는 이름을 넣어주기
newDiv.classList.add("green"); // classList.add() 메서드로 "green"라는 이름을 넣어주기
newDiv.classList.toggle("red"); // classList.toggle() 메서드로 "red"라는 이름을 있으면 빼고 없으면 넣어줌

newDiv.innerHTML = "안녕하세요"; // div 안에 글자 넣어주기
document.body.append(newDiv); // body에 넣어주기
