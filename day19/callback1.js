/* 피자 만들기 - 콜백 방식 비동기 제어 */

/* 1.[크러스트,씬,?]  도우 만들기
2.[토마토,굴,?]  소스 바르기
3.[페퍼로니,새우,?]  토핑 올리기
4.[모짜렐라,체다,파마산, ?]  치즈 뿌리기
5. 굽기
6. 피자 완성! */

const dough = (dough, step) => {
  setTimeout(() => {
    console.log(`${dough} 도우 만들기 완료`);
    step(); // 다음 단계 실행
  }, 3000);
};

const sauce = (sauce, step) => {
  setTimeout(() => {
    console.log(`${sauce} 소스 바르기 완료`);
    step(); // 다음 단계 실행
  }, 2000);
};

const toppings = (toppings, step) => {
  setTimeout(() => {
    console.log(`${toppings}  토핑 올리기 완료`);
    step(); // 다음 단계 실행
  }, 1000);
};

const cheese = (cheese, step) => {
  setTimeout(() => {
    console.log(`${cheese}  치즈 뿌리기 완료`);
    step(); // 다음 단계 실행
  }, 1000);
};

const bake = (step) => {
  setTimeout(() => {
    console.log("5. 굽기 완료");
    step(); // 다음 단계 실행
  }, 5000);
};

const finish = () => {
  setTimeout(() => {
    console.log("6. 피자 완성! ");
  }, 1000);
};

/* 실행 구조 */
dough(() => {
  sauce(() => {
    toppings(() => {
      cheese(() => {
        bake(() => {
          finish();
        });
      });
    });
  });
});
