/* 문제 */

/* div 안에 button 만들기! */

const newDiv = document.createElement("div");
newDiv.style.cssText = `width: 100px; height: 100px; border: 1px solid red; display: flex; justify-content: center;`;
/* newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.border = "1px solid red";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center"; 
newDiv.style.alignItems = "center"; */

const newButton = document.createElement("button");
newButton.innerHTML = "해위";
newDiv.append(newButton);

document.body.append(newDiv);
