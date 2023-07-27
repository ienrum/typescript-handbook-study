interface Person {
  first: string;
  last: string;
}
const p: Person = { first: "Jane", last: "jacobs" };

function email(p: Person, subject: string, body: string): Respoinse {}
// 너무 값과 타입이 반복적으로 나오므로 햇갈리다.
