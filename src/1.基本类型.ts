let a:string = '1'; 
let age:number = 10;
let flag:boolean = true;
// let x:undefined = void 0; 
// a = null;
// 数组1. 长度任意，2，类型必须统一的
let arr:string[] = ['a','b'];
let arrc:Array<string> = arr; // 等价  范型
//tuple 元组类型  长度和类型都确定的数组
let person:[string,number,string] = ['1',1,'1'];
// 枚举类型
enum gender{
  BOY,
  GIRL
}
let boy:number = gender.BOY;

// any 表示任意类型
let x1:any ;
x1 ="name";
x1 =10;
x1=null;

// never类型 ，永远不
// 1. 作为没有返回值的返回值的返回值类型

function getY():never {
    console.log(1);
    throw new Error('报错了');
    console.log(1); // 检测到无法访问的代码。
}
// function sum():never {
//     while(true) {

//     }
//     console.log(1);
// }

// function getname(): void{
//     console.log(1);
//    // return 1; // 不能将类型“1”分配给类型“void”。
// //    return null; // 不能将类型“null”分配给类型“void”。 严格检测
//     //  return undefined // void可以 接收undefined
// }
// never 和 void 的区别
// void可以被赋值为null（非严格Null检查）和undefined，never 则是一个不包含值的类型。
// 拥有void返回值类型的函数能正常运行，拥有never返回值类型的函数无法正常返回，无法种植，或会抛出异常。

