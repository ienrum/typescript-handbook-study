function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius;
    // radius 속성이 없다. 왜냐하면 타입으로 해석 안돼고 함수로 해석되기에 instance of  를 사용했으므로(런타임 연산자)
  }
}
