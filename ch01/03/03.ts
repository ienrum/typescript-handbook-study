function calculateArea(shape: Shape) {
  if ("height" in shape) {
    shape; // Rectangle 타입
    return shape.width * shape.height;
  } else {
    shape; // Square 타입
    return shape.width * shape.width;
  }
}
// 런타임 타입체크를 위해 in 연산자를 사용한다.
