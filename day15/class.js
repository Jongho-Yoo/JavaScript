/* OBJ - 변수 & 함수/
/ class - 변수 & 함수/
/ 중고차 판매 사이트 /
/ 
    가격[price], 연도[year], 주행거리[mileage], 사고유무[hasAccident], 침수여부[hasFlooding]
/
class Car {
  price;
  year;
  mileage;
  hasAccident;
  hasFlooding;
  constructor(a, b, c) {
    this.price = a;
    this.year = b;
    this.mileage = c;
    this.hasAccident = false;
    this.hasFlooding = false;
  }
}

const a = new Car(10000, 2010, 10000);
console.log({ ...a });
const b = new Car(30000, 2000, 50000);
console.log({ ...b });
*/

class Vet {
  #name;
  #age;
  #species;
  #medical_records;
  //생성자
  constructor(a, b, c) {
    this.#name = a;
    this.setAge(b); // age를 직접 할당하지 않고 setAge 메서드를 통해 할당
    this.#species = c;
    this.#medical_records = []; // constructor에 [d]로 받지 않고 빈 배열로 초기화
  }

  setAge(age) {
    if (age < 0) {
      throw new Error("나이는 음수가 될 수 없습니다");
    }
    this.#age = age;
  }
  setMedical(a, b, c) {
    const medicalRecord = new MedicalRecord(a, b, c);
    this.#medical_records.push(medicalRecord);
  }
}

const Moon = new Vet("달", 13, "푸들");

Moon.setMedical("2026-09-15", "감기", "김재희");
Moon.setMedical("2026-09-17", "비만", "이보민");
