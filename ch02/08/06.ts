type T1 = typeof p; // Person
type T2 = typeof email; // (p:Person,subject:string,body:string) => Response

const v1 = typeof p; //object
const v2 = typeof email; // function
// 타입에서 쓰일때와 값에서쓰일때 다른 기능을 하는 연산자들도 있다.
