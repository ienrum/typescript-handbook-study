interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    //                ~~~~~~~~~~~ 'Rectangle' 형식은 'Shape' 형식에 할당할 수 없습니다.
    return shape.width * shape.height;
    //      ~~~~~~ 속성 'height'는 'Square' 형식에 존재하지 않습니다.
  } else {
    return shape.width * shape.width;
  }
}
// Rectangle 은 type 이고 Shape 는 interface 이기 때문에 instanceof 를 사용할 수 없다.
// 하지만 타입체크와 컴파일은 독립적이다.
