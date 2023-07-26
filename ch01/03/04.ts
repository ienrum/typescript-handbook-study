interface Square {
  kind: "square";
  width: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle; // 태그된 유니온

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    shape; // Rectangle 타입
    return shape.width * shape.height;
  } else {
    shape; // Square 타입
    return shape.width * shape.width;
  }
}
// 아예 타입을 속성으로 지정하는법
