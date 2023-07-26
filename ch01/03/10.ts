function add(a: number, b: number) {
  return a + b;
}
function add(a: string, b: string) {
  return a + b;
}
// 오버로딩 불가하다.
// 정확히는 구현체에서는 불가 하지만 타입 수준에선 가능
