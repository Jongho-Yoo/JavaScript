//유저에게 만들고 싶은 버튼 갯수 물어보고
//버튼 안의 내용은 안녕! 해주고
//버튼 갯수만큼 화면에 출력하기

const user_btn = +prompt("만들고 싶은 버튼 갯수를 입력하세요.");

Array(user_btn)
  .fill(0)
  .forEach((v, i) => {
    const btn = document.createElement("button");
    btn.innerHTML = "안녕!";
    document.body.append(btn);
  });

//유저에게 div 갯수 물어보고
//div 안의 내용은 hello! 해주고
//background: red,orange,yellow,green,blue,navy,indigo
//화면에 출력하기

const user_div = +prompt("만들고 싶은 div 갯수를 입력하세요.");

Array(user_div)
  .fill(0)
  .forEach((v, i) => {
    const div = document.createElement("div");
    div.innerHTML = "hello!";
    div.style.background = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "navy",
      "indigo",
    ][i % 7];
    document.body.append(div);
  });

//const bg = ["red", "orange", "yellow", "green", "blue", "navy", "indigo"];

//const user_div = +prompt("만들고 싶은 div 갯수를 입력하세요.");

//Array(user_div)
//  .fill(0)
//  .forEach((v, i) => {
//    const newDiv = document.createElement("div");
//    newDiv.innerHTML = "hello!";
//    newDiv.style.background = bg[i % 7];
//    document.body.append(newDiv);
//  });
