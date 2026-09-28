// 유저한테 만들고 싶은 태그 묻고, 내용 묻고 화면에 나타내기

const user_tag = prompt("만들고 싶은 태그를 입력하세요.");
const user_content = prompt("태그에 넣을 내용을 입력하세요.");

const newTag = document.createElement(user_tag);
newTag.innerHTML = user_content;
document.body.append(newTag);
