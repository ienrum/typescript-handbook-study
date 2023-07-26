function asNumber(val: number | string): number {
  return val as number;
}

// js
function asNumber(val) {
  return val;
}

// 타입 연산을 했지만 런타임에는 영향을 주지않기에 코드에 실제 정제과정은 없다.
// 즉 타입이 다르더라도 컴피일과 타입체크는 독립적이기에 오류발생가능
