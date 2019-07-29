// 联合类型
let names:string|number;
names = 1;
names = 'string';
// 字面量的联合
let grade: 1|2|3;
grade = 1;
// grade = 4; // 设置变量的取值范围以外会报错。

let level:'A'|'B'|'C';
level = 'A';

