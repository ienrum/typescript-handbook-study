interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  y: number;
}

// 3D 는 2D 그리고 2D 는 1D 의 서브타입(부분 집합)
// 즉 확장 가능한 부분이 의미적으로 일반적이다.
// 예를들어 동물 > 조류 에서는 동물이 속성이 적지만 의미적으로는 조류를 포함한다.
// 한마디로 부분집합(확장 가능)
