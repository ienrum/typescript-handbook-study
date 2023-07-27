interface Cylinder {
  radius: number;
  height: number;
}
const Cylinder = (radius: number, height: number) => ({ radius, height });

// 사실 위 두개의 실린더는 아무 상관이없다 서로 영향 x
