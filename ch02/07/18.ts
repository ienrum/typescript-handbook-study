type T = Exclude<string | Date, string | number>;
type NoneZeroNums = Exclude<number, 0>;
// Exclude<number, 0> = number extends 0 ? never : number
// 당근 number
