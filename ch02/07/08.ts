interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

// & 는 인터섹션
// 타입연산자는 인터페이스의 속성이 아닌 집합에 적용

// 따라서 Person 과 Lifespan 이 교집합인경우는 속성을 모두가진 경우이므로
const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1012/06/23"),
  death: new Date("1954/04/23"),
}; // 정상
