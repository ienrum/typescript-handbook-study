interface Person {
  name: string;
}
interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

// 일반적인 PersonSpan 선언 법
// 부분 집합으로 이해.
// 즉 의미적으로 Person 의 부분집합이 PersonSpan 이되도록
