/**
 * 函数
 */
// 定义函数类型检测的是函数的参数和返回值
function sum(a:number, b:number): number{
   return a + b;
} 
// 函数表达式
// type 用来定义类型别名
type GetUserName = (x: string, y:string) => string; // 函数类型两个参数是string没有返回值或者返回值是void
let getname:GetUserName = (firstName: string, lastName: string): string  =>  {  // 返回值类型不一致会提示错误
    return firstName + lastName;
}
// let getname:GetUserName = (firstName: string, lastName: string): void  =>  {  // 返回值类型不一致会提示错误
//   return firstName + lastName;
// }
// 可选参数 这个参数可有可无
type Iters = (item: number,index?:number, arr?:number[]) => void; // 定一个三个参数的类型，其中后两个参数可传可不传
let iter1: Iters = (it:number): void => {
    console.log(it);
}
let iter2: Iters = (it:number,index?:number):void => {
    console.log(it);
}
let iter3: Iters = (it:number,isd?:number,arr?:number[]):void => {
    console.log(arr);
}
type ItersOne = (item: number,index?:number, arr?:number[]) => string|number; // 定一个三个参数的类型，其中后两个参数可传可不传
let iterone: ItersOne = (it:number,isd?:number,arr?:number[]):string|number => {
//   return 1;
  return '1';
}
//默认参数 
function ajax(url:string, mothod: string='GET') {
  console.log(url);
}
// 剩余参数
function sum2(prefix: string,...args:number[]) { 
  return prefix + args.reduce((val,item) =>val+item,0);//求数组和
}

let r=  sum2('args',1,2,3,4,5); //无限参数，也可以说是剩余参数
console.log(r);

// 函数的重载
type myType = string|number|boolean;
function getType(val: myType):myType {
  return val;
}
// 规定这个函数智能接受三种类型string number boolean
function fun(val:string): string;
function fun(val:number): number;
function fun(val:boolean): boolean;
function fun(val:any):any {
  if (typeof val === 'string') {
      return val + val;
  }
  if (typeof val === 'number') {
    return val*2;
  }
  if (typeof val === 'boolean') {
    return !val;
  }
}

