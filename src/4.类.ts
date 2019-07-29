/**
 * 定义一个类
 * get set 存储器
 */
class Person{
    name:string;
    constructor(name:string) {
       this.name = name;
    }
    getName():void{
      console.log(this.name);
    }
}
class Person1{
    myname:string;
    constructor(name:string) {
       this.myname = name;
    }
    get name () {
        return this.myname;
    }
    set name(name:string) {
        this.myname = name;
    }
}
let p1 = new Person1('ylk');
p1.name = 'zxx';
// 参数的属性
// 加行了public之后就相当于给当前类的示例增加了一个公有属性。
class Person2 {

    constructor(public myname:string) {
    }
}
let p2 = new Person2('2222');
p2.myname= '123';
console.log(p2);

// 只读属性
class Person3{
    readonly id:number;
    constructor(id:number) {
      this.id = id;
    }
}
// 父类 子类 其他地方

class Person4{
   private id: number; // 私有属性，只能自己访问。
   protected name:string; // 受有限度的保护的属性只能在自己的自己的子类中被访问
   public height: number; // 公有height属性，所有地方都能访问
   constructor(id: number, name:string,height:number) {
      this.id = id;
      this.name = name;
      this.height = height;
   }
   getId() {
    console.log('父类:'+this.id);       
   }
   getName() {
       console.log('父类:'+this.name);
   }
   getHeight() {
       console.log('父类:'+this.height);
   }
}

class Child extends Person4{
    getName() {
       console.log('子类:'+this.name);
    }
    getHeight() {
        console.log('父类:'+this.height);
    }
}

let c = new Child(1, 'zengxiaoxian', 180);
c.getName();
console.log(c.height);
// c.name  报错 因为name是受保护的 只能自己和子类调用

// 类的静态属性和静态方法 

class MyStatic{
    static names:string = 'ylk';
    static getName() {
        return this.names;
    }
}
let m = new MyStatic();
// m.names; 实例没有静态方法
// console.log(MyStatic.getName());
// class ChildSt extends MyStatic{
//     static getNames() {
//         return this.names;
//     }
// }
// console.log(ChildSt.getName());
// let dd = new ChildSt();
// dd.getNames();

// 抽象类 
/**
 * 抽象的概念 ，无法实例化，只能被继承。
 */
abstract class Animal{
  public name:string;
  constructor(name:string) {
    this.name = name
  }
  abstract speak():void;
}
class Cat extends Animal{
    type:string;
    constructor(name:string, type:string) {
        super(name);
        this.type = type;
    }
    speak() {
      console.log(this.name+'喵喵喵'+this.type);
    }
}
let cat = new Cat('小猫','猫科');
cat.speak();
