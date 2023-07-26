interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

// > normalize({ x: 3, y: 4, z: 5 });
// {x: 0.6,y:0.8,z:1}

// 즉 구조적 타이핑으로 오류 발생 (3d 를 2d 로 변환)
