// 정상, {"A","B"}는 {"A","B"} 의 부분집합.
const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab; // 정상, {"A","B"}는 {"A","B",12}의 부분집합.

declare let twelve: AB12;
const back: AB = twelve;
// 할당 불가. 왜냐 부분집합이아니여서
// 반대로는 인정
