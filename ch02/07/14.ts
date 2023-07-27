function getKey<K extends string>(val: any, key: K) {
  //...
}
// 제너릭 한정 자로도 쓰인다.
// 이때는 string 의 부분집합 서브 타입을 가져와야한다.

getKey({}, "x");
getKey({}, Math.random() < 0.5 ? "a" : "b");
getKey({}, document.title);
getKey({}, 12);
// '12' 는 'string' 형식에 할당 불가.

// 할당 불가 =  상속 불가
