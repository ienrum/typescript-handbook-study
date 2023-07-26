function asNumber(val: number | string): number {
  return typeof val === "string" ? Number(val) : val;
}
// 결국 런타임의 타입을 체크해야함
