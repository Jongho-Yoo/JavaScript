// string, boolean, number, undefined
// obj, arr, func, math , date

/* const a = new Date();

console.log(a.getDate()); // 1~31
console.log(a.getDay()); // 0~6 (일요일~토요일)0 1 2 3 4 5 6
console.log(a.getHours()); // 0~23 시
console.log(a.getMinutes()); // 0~59 분
console.log(a.getSeconds()); // 0~59 초
console.log(a.getMilliseconds()); // 0~999
console.log(a.getTime()); // 1970년 1월 1일 00:00:00 기준으로 현재까지의 밀리세컨드 (날짜 차이 계산용)
 */

const timetableSection = document.createElement("section");
timetableSection.classList.add("timetable");

const timetableData = [
  { day: "월", startTime: "10:00", endTime: "22:00", dayIdx: 1 },
  { day: "화", startTime: "10:00", endTime: "22:00", dayIdx: 2 },
  { day: "수", startTime: "10:00", endTime: "22:00", dayIdx: 3 },
  { day: "목", startTime: "10:00", endTime: "22:00", dayIdx: 4 },
  { day: "금", startTime: "10:00", endTime: "23:00", dayIdx: 5 },
  { day: "토", startTime: "10:00", endTime: "23:00", dayIdx: 6 },
  { day: "일", startTime: "", endTime: "", dayIdx: 0 },
];

timetableData.forEach((x) => {
  const scheduleDiv = document.createElement("div");
  scheduleDiv.classList.add("schedule");

  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  if (new Date().getDay() == x.dayIdx) dayDiv.classList.add("today");

  dayDiv.innerHTML = `${x.day}요일`;

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.innerHTML = !!x.startTime
    ? `${x.startTime} - ${x.endTime}`
    : "쉬는날";

  scheduleDiv.append(dayDiv);
  scheduleDiv.append(timeDiv);
  timetableSection.append(scheduleDiv);
});

document.body.append(timetableSection);
