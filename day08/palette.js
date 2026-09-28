/* 1. 색상 데이터 */
const colors = [
  { name: "TURQUOISE", hex: "#1ABC9C" },
  { name: "EMERALD", hex: "#2ECC71" },
  { name: "PETER RIVER", hex: "#3498DB" },
  { name: "AMETHYST", hex: "#9B59B6" },
  { name: "WET ASPHALT", hex: "#34495E" },
  { name: "GREEN SEA", hex: "#16A085" },
  { name: "NEPHRITIS", hex: "#27AE60" },
  { name: "BELIZE HOLE", hex: "#2980B9" },
  { name: "WISTERIA", hex: "#8E44AD" },
  { name: "MIDNIGHT BLUE", hex: "#2C3E50" },
  { name: "SUN FLOWER", hex: "#F1C40F" },
  { name: "CARROT", hex: "#E67E22" },
  { name: "ALIZARIN", hex: "#E74C3C" },
  { name: "CLOUDS", hex: "#ECF0F1" },
  { name: "CONCRETE", hex: "#95A5A6" },
  { name: "ORANGE", hex: "#F39C12" },
  { name: "PUMPKIN", hex: "#D35400" },
  { name: "POMEGRANATE", hex: "#C0392B" },
  { name: "SILVER", hex: "#BDC3C7" },
  { name: "ASBESTOS", hex: "#7F8C8D" },
];

/* 2. 큰 상자(그리드) div 만들기 */
const container = document.createElement("div");
container.style.cssText = `
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 한 줄에 5개씩 4열로 */
  padding: 20px;
`;

/* 3. 20번 반복 */
colors.forEach((color) => {
  const colorCard = document.createElement("div");
  colorCard.style.cssText = `
    height: 100%;
    width: 100%;
    background-color: ${color.hex};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: white;
    font-weight: bold;
    font-size: 12px;
    
    
  `;

  colorCard.innerHTML = color.name;
  container.append(colorCard);
});

/* 4. 최종 출력 */
document.body.append(container);

/* const colors = [
  "#123123",
  "#efe134",
  "#123890",
  "#928383",
  "#121184",
  "#1add23",
  "#efe134",
  "#eeef90",
  "#118383",
  "#123922",
  "#12ba23",
  "#bbe134",
  "#123890",
  "#921183",
  "#333984",
  "#1231aa",
  "#eeee34",
  "#1feff0",
  "#928311",
  "#124484",
];

const section = document.createElement("section");
section.style.cssText =
  "width:100vw;height:100vh;display:grid;grid-template-columns: repeat(5, 1fr);";

colors.forEach((x) => {
  const newDiv = document.createElement("div");
  newDiv.style.cssText = width: 100%; height: 100%; background-color:${x}; display:flex;    justify-content: end; align-items:end;;
  newDiv.innerHTML = x;
  section.append(newDiv);
});

document.body.append(section); */
