class Character {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }
  get name() {
    return this.#name;
  }
  get power() {
    return this.#power;
  }
  get hp() {
    return this.#hp;
  }
  set hp(v) {
    this.#hp = Math.max(0, Math.min(v, this.#maxHp));
  }

  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격!`);
    console.log(`${this.power} 데미지`);
    console.log(`남은 체력: ${target.hp}`);
  }
}

/* S2 */
/* Warrior 클래스 */
/* 기본:150, 공격력:20 파워스트라이크:타겟의 HP를 절반으로 감소 대신데 내 체력 10 깎임*/
/* #[접근제한] */
/* 원래 유지시키는게 맞음 */
/* 그대로 물려받음 */
class warrior extends Character {
  constructor(name) {
    super(name, 150, 20);
  }
  powerStrike(target) {
    if (this.hp <= 10) {
      console.log(
        `${this.name} 체력이 부족하여 파워스트라이크를 사용할 수 없습니다.`,
      );
      return;
    }
    this.hp -= 10;
    target.hp -= target.hp / 2;
    console.log(`${this.name}의 파워스트라이크!`);
    console.log(`${target.hp / 2} 데미지`);
    console.log(`${this.name}의 남은 체력: ${this.hp} `);
  }
}

const a = new warrior("윤정은");
const b = new warrior("오찬식");

const wolf = { name: "늑대", hp: 100 };
const golem = { name: "골렘", hp: 1000 };

a.attack(wolf);
b.powerStrike(wolf);

console.log({ wolf, golem });

/* Monster class 만들기 */
/* hp, name, power, attack(target) */

class Monster {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }
  // get set 생략함

  attack(target) {
    console.log(`${this.#name} -> ${target.name} 공격!`);
    target.hp -= this.#power;
  }
}

class Wolf extends Monster {
  #dodgeRate;
  constructor(name) {
    super(name, 100, 15);
    this.#dodgeRate = 0.2; // 20% 회피율
  }
  dodge() {
    return Math.random() < this.#dodgeRate;
  }
}

/* Magician 클래스 */
/* 기본:100, 공격력:30 */
/* Thief 클래스 */
/* 기본:120, 공격력:25 */
