function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
  return a + b;
}

const three = add(1, 2); // number
const twelve = add("1", "2"); // string
// 타입수준에서는 가능
// 여러개 설정가능하지만 결국 런타임시 구현체는 하나만 존재
