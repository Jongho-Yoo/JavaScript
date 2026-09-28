const a = "icecream";
const b = a.includes("cream"); //역할: 포함하니? 입력타입:string 결과타입: boolean
const c = a.repeat(3); // 역할 반복해줘 !  입력타입: number 결과타입: string

const d = a.startsWith("a"); // 역할: ?으로 시작하니? 입력타입: string 결과타입: boolean
const e = a.endsWith("z"); //역할: ?으로 끝나니? 확인 입력타입: string 결과타입: boolean

const f = a.toUpperCase(); //역할: 모두 대문자로 변경 입력타입: x 결과타입: string
const g = a.toLowerCase(); //역할: 모두 소문자로 변경 입력타입: x 결과타입: string

const h = a.replace("i", "w"); //역할: i를 w로 교체 입력타입: string, string 결과타입: string
const i = a.replaceAll("i", "w"); //역할: i를 w로 모두 교체 입력타입: string, string 결과타입: string

const j = a.split("r"); //역할: r를 기준으로 반 쪼개줘 가져오기 입력타입: string 결과타입: string
const k = a.slice(0, 4); //역할: 0~4까지 잘라줘 가져오기 입력타입: number, number 결과타입: string

const l = a.length; //역할: 문자열 길이 가져오기. (함수 아님)

const news = `Controversy is swirling around Rachel Cusk's new novel and its movie-star protagonist named "M". Why the fuss – and could the character be based on Natalie Portman?

From Truman Capote mining the secrets of his high society friends for his writing to The Devil Wears Prada's Miranda Priestly bearing a striking similarity to Vogue's Anna Wintour, there's always a certain excitement in discovering that a literary character might not be entirely fictional – especially when their rumoured inspiration is a public figure. 

The new novel by Rachel Cusk, Life of M, tells the story of a fictional actor, "M", some of whose biographical details bear an uncanny resemblance to those of real-life film star Natalie Portman. 

Anticipation for the new novel was already high – "a blazing interrogation of fame, power, beauty and truth," said its publisher. Cusk is one of contemporary fiction's most celebrated and boundary pushing writers, and so a new book by her is always an event. But interest soon spilled beyond the literary world when the seeming Portman connection was made.`;

const user_lookingfor = window.prompt("찾고 싶은 단어를 입력하세요");
console.log(news.includes(user_lookingfor) ? "있음" : "없음");
console.log(news.toUpperCase());
console.log(news.replaceAll(user_lookingfor, "and"));
