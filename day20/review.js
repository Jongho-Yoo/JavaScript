/* const a = new Promise((success, fail) => {
  // 🚨 1. promise 소문자 오타 -> Promise 대문자 필수!
  success("ㅎㅇ");
});
console.log(a);
a.then((v) => {
  console.log(v);
}); */

//quiz
//피자 만들기
// 도우  3초 -> 소스2초 -> 토핑2초 -> 치즈1초 -> 굽기3초 -> 피자 완성! 2초
// 프로미스 타입을 이용해서 만들기!

const makedough = (dough) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${dough} 도우 만들기 완료`);
    }, 3000);
  });
};

const makesauce = (sauce) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${sauce} 소스 바르기 완료`);
    }, 2000);
  });
};

const maketoppings = (toppings) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${toppings} 토핑 올리기 완료`);
    }, 2000);
  });
};

const makecheese = (cheese) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${cheese} 치즈 올리기 완료`);
    }, 1000);
  });
};

const makebake = (bake) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${bake} 굽기 완료`);
    }, 3000);
  });
};

const makepizza = (pizza) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${pizza} 피자 완성!`);
    }, 2000);
  });
};

makedough("씬")
  .then((x) => {
    console.log(x);
    return makesauce("토마토");
  })
  .then((x) => {
    console.log(x);
    return maketoppings(" 새우");
  })
  .then((x) => {
    console.log(x);
    return makecheese("파마산");
  })
  .then((x) => {
    console.log(x);
    return makebake("피자 굽기");
  })
  .then((x) => {
    console.log(x);
    return makepizza("완성된 피자");
  })
  .then((x) => {
    console.log(x);
  });
