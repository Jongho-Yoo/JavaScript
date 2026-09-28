const std = {
  name: "윤정은",
  age: 29,
  mbti: "enfp",
  parttime: ["코인노래방", "옷가게", "도토루 카페"],
};

const { name, mbti, parttime } = std; // 윤정은 enfp ["코인노래방","옷가게","도토루 카페"] // 객체 구조분해 할당
const [coin] = parttime; // "코인노래방" // 배열 구조분해 할당
const a = parttime[0]; // "코인노래방" // 배열 구조분해 할당 안 하고 그냥 가져오기
const [one] = parttime; // "코인노래방" // 배열 구조분해 할당

const [coin1, coin2, coin3] = parttime; // "코인노래방" "옷가게" "도토루 카페" // 배열 구조분해 할당
const [_, two] = parttime; // "옷가게" // 배열 구조분해 할당
const [__, ___, three] = parttime; // "도토루 카페" // 배열 구조분해 할당
