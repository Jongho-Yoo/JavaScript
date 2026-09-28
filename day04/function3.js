/* recipe = (x) => {
  console.log("요리 시작~!~!~!~!~!~!~!");
  console.log("물끓이기");
  x();
  console.log("맛있게 먹기");
};

const ramen = (x) => {
  console.log("스프넣기");
  console.log("라면넣기");
  console.log("보글보글 끓이기");
};

const buldak = (x) => {
  console.log("라면넣기");
  console.log("물버리기");
  console.log("스프 넣고 비비기");
};

const rice = () => {
  console.log("쌀넣기");
  console.log("불리기");
  console.log("기다리기");
};

recipe(ramen);
recipe(buldak);
recipe(rice);
 */

const activeSkill = (skill) => {
  console.log("스킬 시전!");
  skill();
  console.log("스킬 종료!");
};

const fireball = () => {
  console.log("불덩이 발사!");
};

const iceball = () => {
  console.log("얼음덩이 발사!");
};

const thunderball = () => {
  console.log("번개덩이 발사!");
};

activeSkill(fireball);
activeSkill(iceball);
activeSkill(thunderball);
