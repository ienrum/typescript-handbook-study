interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // "x"| "y"

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  //...
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];
sortBy(pts, "x");
sortBy(pts, "y");
sortBy(pts, Math.random() < 0.5 ? "x" : "y");
sortBy(pts, "z");
// "z" 는 "x"|"y" 에 할당 불가.
