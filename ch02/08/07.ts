const v = typeof Cylinder; // funtion
type T = typeof Cylinder; // typeof Cylinder
// 타입의 타입 즉 이미 Cylinder 는 타입인 데 타입연산을 썻다.

declare let fn: T;
const c = new fn(); // 타입이 Cylinder
// 즉 생성할때 타입을 지정해준다. 즉 생성자 타입으로 함 인스턴트 타입이아니라
