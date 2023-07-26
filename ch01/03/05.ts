class Square {
  constructor(public width: number) {}
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle; // 타입으로 사용

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // 값으로 사용
    shape; // Rectangle 타입
    return shape.width * shape.height;
  } else {
    shape; // Square 타입
    return shape.width * shape.width;
  }
}
//타입을 클래스로 만들면 타입과 값 둘다 사용가능하다.
