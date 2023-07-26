function calculateLengthL1(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

// 즉 어떤 인자의 타입이 Vector3D 에 추가 될지 모르기때문에
// 각각 더하는 구현을 확정지어야한다.
