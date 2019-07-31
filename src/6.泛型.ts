/**
 * 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型
 * 而在使用的时候再指定类型的一种特性
 * 泛型<T> 作用域只限于函数内部使用。
 */
function createArray(length:number,val:any):any[]{
    let arr:any[] = [];
    for(let i=0;i<length;i++) {
        arr[i] = val;
    }
    return arr;
}
/**
 * 示例如下
 */
function createArray2<T>(length:number,val:T):T[]{
    let arr:any[] = [];
    for(let i=0;i<length;i++) {
        arr[i] = val;
    }
    return arr;
}
createArray2<string>(3, 'x');
//createArray2<string>(3, 3); // 报错
createArray2<number>(3, 3); // 不报错
// 类数组  不是数组类型比如 arguments
function sum1223(...args:number[]) {
    //let a2:number[] = arguments; // 报错
    let a2:IArguments = arguments;
    /**
     * IArguments
     * interface IArguments {
         [index: number]: any;
         length: number;
         callee: Function;
       }
     */
}

// 泛型类  在类中使用泛型
class MyArr<T> {
    list:T[];
    constructor(list:T[]) {
        this.list = list;
    }
    add(val:T) {
      this.list.push(val);
    }
    getFirst():T {
        return this.list[0]
    }
}
let ma = new MyArr<number>([1,2,3,4,5]);
let mas = new MyArr<string>(['1','2','3','4','5']);
// 泛型接口  定义接口的时候使用泛型
interface SUM<T> {
    (a:T,b:T):T;
}
let sum3:SUM<number> = (a,b) => {
   return a+b;
}

/**
 * 泛型可以有多个
 * tuple 长度和类型确定的数组
 */
function swap<A,B>(a:[A,B]):[B,A]{
    return [a[1],a[0]];
}
// 因为在定义函数的时候并不知道这个T是什么类型 可以让类型继承接口 ，为什么继承 ？ 因为如果实现的话 就确定了类型。
interface Length {
    length: number;
}
function logger<T extends Length>(val:T){
   console.log(val.length);
}
// 泛型类型的别名
type Cart<T> = {
    list:T[]
}|T[];
let cart:Cart<string> = ['a','b'];
let cart2:Cart<number> = [2,3,4,5];

// 泛型接口，泛型类型别名的区别与联系
/**
 * 1. 接口会创建一个新的名称，别名不会
 * 2. 别名不能被继承和实现
 */
interface A{}
type A1 = A;


// 接口的兼容性
// 在检查参数类型的时候，并不是真正的比较的接口类型，而是比较具体的属性是否兼容。
// 基本数据类型的兼容性
let num:string|number;
let strs:string='1';
num = strs;

let num2: {
    toString():string
}
num2 = strs;
/**
 * 类的兼容性
 * 父子之间能不能赋值跟父类子类没有关系，跟属性是否满足；
 */
class Ps{
   names:string = '';
}
class Cd extends Ps{
   age:number= 0;
}
let p11:Ps = new Ps();
let c11:Cd = new Cd();

let p111:Ps = c11;
// let c111:Cd = p11; // 报错因为 父类示例没有age属性

/**
 * 函数的兼容性
 * 比较函数的时候，先比较函数上的参数，再比较函数上的返回值
 * 参数是可以省略
 */
type sunFunc = (a:number,b:number) => number;
let sum11:sunFunc;
let sum111:sunFunc;

sum11 = function(a:number,b:number):number{
    return a+b;
}
sum111 = function(a:number):number{
    return a;
}
// 这里不是箭头函数，左边是参数列表，右边是返回对象。
type GetPerson = (a:string) => {name:string,age:number};

let gp:GetPerson = (a) => {
    return {
        name:'ss',age:2
    }
}

/**
 * 双向协变
 */
type logFuncs = (val:number|string) => void;
let logss:logFuncs;
logss = (val:string|number|boolean) => {
  console.log(val);
}
// logss = (val:string) => {  // 并不能实现
//     console.log(val);
// }
/**
 * 泛型的兼容性
 * 泛型在判断兼容性的时候，，会先判断腿类型，再进行兼容性判断
 */
interface Empty<T>{}
let x11:Empty<number>;
let y111:Empty<string>={};
x11 = y111; // 因为是空

interface NotEmpty<T>{
    date:T;
}
let a111:NotEmpty<string> = {
    date: '123'
}
let b111:NotEmpty<number> = {
    date: 123
}

//a111= b111; //报错

/**
 * 链判断运算符
 * 1. 链判断运算符是一种先勘查属性是否存在，在尝试访问该属性的运算符，其符号为 ？
 * 2. 如果运算符左侧的操作数？.计算为null/undefined,则表达式求值为undefined。否则正常触发目标属性访问，方法，或函数调用
 */
let namesss:any = {
    name: 'yanglikun'
}
// namesss = null;
// console.log(namesss?.name);  不支持   ES9中在讨论是否支持


/**
 * 可辨识的联合类型
 * 1. 就是利用联合类型中的共有字端进行类型保护的一种技巧
 * 2. 相同字端的不同取值就是可辨识的
 */
interface Type1{
    name:'type1';
    text1: '1';
}
interface Type2{
    name:'type2';
    text2: '2';
}
type Botten = Type1|Type2;
function getButten(btn:Botten) {
    if (btn.name === 'type1') {
    console.log(btn.text1);
    }
    if (btn.name === 'type2') {
        console.log(btn.text2);
    }
}

// in 操作符

interface Bird1{
    swing: number
}
interface Gog1{
    leg:number
}
function getAnimoal(anim:Bird1|Gog1) {
   if ('swing' in anim) {
       console.log(anim.swing);
   }
   if ('leg' in anim) {
    console.log(anim.leg);
   }
}
/**
 * 自定义的类型保护
 * 1. ts里的类型保护本质上就是一些表达式，他们会在运行时检查类型信息，以确保在某个作用域里的类型是符合预期的
 * 2. 要自定义一个类型保护，只需要简单地为这个类型保护定义一个函数即可，这个函数的返回值是一个类型谓词
 * 3. 类型谓词的预发为 parameterName is Type 这种类型，其中 parameterName 必须是当前函数签名里的一个参数名
 */

interface Bird2{
    swing: number
}
interface Gog2{
    leg:number
}
// 自定义保护函数
function iSBird(x:Bird2|Gog2):x is Bird2 {
    return (x as Bird2).swing > 0;
    // return (<Bird2>x).swing>0;
}
// 如果是鸟的话，返回鸟的翅膀个数，如果是God返回腿的个数
function getAnimoal1(anim:Bird2|Gog2) {
   if (iSBird(anim)) {
       console.log(anim.swing);
   }
   if (!iSBird(anim)) {
    console.log(anim.leg);
   }
}

let b1s:Bird2 = {
    swing:2
}
getAnimoal1(b1s);