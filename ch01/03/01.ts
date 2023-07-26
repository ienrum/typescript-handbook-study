// $ cat test.ts
let x = 'hello';
x = 1234;
// $ tsc test.ts
test.ts:2:1 - error TS2322: Type '1234' is not assignable to type 'string'.

2 x = 1234;
  ~

// $ cat test.js
var x = 'hello';
x = 1234;

// 컴파일과 타입 체크는 독립적, 즉 체크 오류가 있어도 컴파일은 가능