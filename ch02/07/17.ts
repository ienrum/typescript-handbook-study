const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
// 할당불가
// 'length' 속성의 형식이 호환되지 않는다.
// {0:number 1:number} 가 아니라 {0:number,1:number,length:2} 로 모델링한다.
// 구조적 타이핑을 하더라도. length 값 타입이 다르기에 안됨
