interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface Namedvector {
  name: string;
  x: number;
  y: number;
}

// calculateLength 호출시 Namedvector 로도 호출 가능
// 즉 구조적타이핑 가능
