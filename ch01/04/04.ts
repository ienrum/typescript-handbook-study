function calculateLengthL1(v: Vector3D) {
  for (const axis of Object.keys(v)) {
    // 'strig'은 'Vector3D'의 인덱스 타입에 할당할 수 없습니다.ts(2411)
    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}

// const vec#d = {x:3,y:4,z:1,address:'123 Broadway'};
// calculateLengthL1(vec3D); 즉 구조적 타이핑으로인해 오류 발생
//
