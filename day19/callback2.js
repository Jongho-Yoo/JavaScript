// 🥚🐣🐤🐔🍗
//버튼 - 치킨만들기!
// 클릭하면
// [1~3]🥚
// [2~4]🐣
// [2~4]🐤
// [3~5]🐔
// [1~3]🍗

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; // 랜덤 정수 구하는 함수 먼저 설정

const egg = (step) => {
  setTimeout(
    () => {
      console.log("🥚");
      step();
    },
    getRandomInt(1, 3) * 1000,
  );
};

const hatch = (step) => {
  setTimeout(
    () => {
      console.log("🐣");
      step();
    },
    getRandomInt(2, 4) * 1000,
  );
};

const chick = (step) => {
  setTimeout(
    () => {
      console.log("🐤");
      step();
    },
    getRandomInt(2, 4) * 1000,
  );
};

const chicken = (step) => {
  setTimeout(
    () => {
      console.log("🐔");
      step();
    },
    getRandomInt(3, 5) * 1000,
  );
};

const fried = (step) => {
  setTimeout(
    () => {
      console.log("🍗");
      step();
    },
    getRandomInt(1, 3) * 1000,
  );
};

/* 버튼 클릭 이벤트에 연결할 실행부 */
const chickenBtn = document.querySelector("#chicken-btn");
chickenBtn.addEventListener("click", () => {
  console.log("치킨 만들기 시작!");

  egg(() => {
    hatch(() => {
      chick(() => {
        chicken(() => {
          fried(() => {
            console.log("치킨 완성!");
          });
        });
      });
    });
  });
});
