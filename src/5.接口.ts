/**
 * 接口
 * 1 接口一方面可以在面向对象编程中表示为行为哦的抽象，另外可以用来描述对象的形状
 * 2 接口就是把一些类中公有的属性和方法抽象出来，可以用来约束实现此接口的类
 * 一个类可以继承另一个类并实现多个接口
 * 接口像插件一样是用来增强类的，而抽象类是具体类的抽象概念
 * 一个类可以实现多个接口，一个接口可以被多个类实现，但一个类可以有多个子类，但只能有一个父类
 */
// 描述对象的形状 描述对象属性的名称和值的类型
 interface Speekable{
   name:string;
   speak():void;
 }
 //当用接口描述对象的时候，对一个属性，少一个属性都不行
 let pw:Speekable = {
     name:'yanglikun',
     speak() {
       console.log(this.name);
     }
 }
//  描述行为的抽象
interface Eatable{
    eat():string;
}
class Per implements Eatable,Speekable{
    name: string;
    constructor(name:string) {
     this.name = name;
    }
    speak() {
    
    }
    eat() {
      return '垃圾';
    }
}
class Sb extends Per {

}
let s = new Sb('ni');
console.log(s.eat());

//  未知的其他任意属性
interface P6 {
    readonly id:number;
    name: string,
    [propName:string]:any;
} 
let e1: P6 = {
    id:1,
    name: '小明',
    age: 26,
    city:'北京'
}
// 接口也可以继承 引用子接口的类需要实现子接口方法也要实现父接口方法

interface Speak {
    name:string;
    speak():void;
}
interface SpeakChinese extends Speak {
    age: number;
    speakchinese():void;
}

let bbc:SpeakChinese = {
   name:'nihao',
   age:23,
   speak() {
   },
   speakchinese() {
   }
}
class Bbc implements SpeakChinese{
    constructor(public name:string, public age:number) {
    }
    speak() {
    }
    speakchinese() {
    }
}

// 函数类型接口  接口还可以用来约束我们的函数
interface Discount{
    (price:number):number;
}
let d:Discount = (price:number):number => {
  return price*.8;
}
// 可索引接口 可以对对象和数组进行约束
interface UserInter{
    [index:number]: string;
}
let user1:UserInter = ['1','12'];
interface UserInter1{
    [index:string]: string;
}
let user2:UserInter1 ={
    nun: 'ylk'
}
// 构造函数类型 在TS 中我们可以用interface来描述类
// 同时页可以使用interface里特殊的new() 关键字来描述类的构造函数类型

class Anim{
    constructor(public name:string) {

    }
}
interface WithName{
    new(name:string):Anim
}
function createAnim(clazz: WithName, name:string) {
   return new clazz(name);
}
let asd = createAnim(Anim, 'yyy');
console.log(asd.name);