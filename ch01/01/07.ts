const a = null + 7;
// ~~~~~~ '+' cannot be applied to types 'null' and '7'.
const b = [] + 12;
// ~~~~~~ '+' cannot be applied to types 'never[]' and '12'.
alert("Hello", "TypeScript");
// ~~~~~~ Expected 0-1 arguments, but got 2.

// ts 는 js 의 런타임 동작을 모델링하지만, 의도치않은 오류로 이어질수있다면 체크한다.
