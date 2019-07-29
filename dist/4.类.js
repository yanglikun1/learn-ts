"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 定义一个类
 * get set 存储器
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.myname = name;
    }
    Object.defineProperty(Person1.prototype, "name", {
        get: function () {
            return this.myname;
        },
        set: function (name) {
            this.myname = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
}());
var p1 = new Person1('ylk');
p1.name = 'zxx';
// 参数的属性
// 加行了public之后就相当于给当前类的示例增加了一个公有属性。
var Person2 = /** @class */ (function () {
    function Person2(myname) {
        this.myname = myname;
    }
    return Person2;
}());
var p2 = new Person2('2222');
p2.myname = '123';
console.log(p2);
// 只读属性
var Person3 = /** @class */ (function () {
    function Person3(id) {
        this.id = id;
    }
    return Person3;
}());
// 父类 子类 其他地方
var Person4 = /** @class */ (function () {
    function Person4(id, name, height) {
        this.id = id;
        this.name = name;
        this.height = height;
    }
    Person4.prototype.getId = function () {
        console.log('父类:' + this.id);
    };
    Person4.prototype.getName = function () {
        console.log('父类:' + this.name);
    };
    Person4.prototype.getHeight = function () {
        console.log('父类:' + this.height);
    };
    return Person4;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        console.log('子类:' + this.name);
    };
    Child.prototype.getHeight = function () {
        console.log('父类:' + this.height);
    };
    return Child;
}(Person4));
var c = new Child(1, 'zengxiaoxian', 180);
c.getName();
console.log(c.height);
// c.name  报错 因为name是受保护的 只能自己和子类调用
// 类的静态属性和静态方法 
var MyStatic = /** @class */ (function () {
    function MyStatic() {
    }
    MyStatic.getName = function () {
        return this.names;
    };
    MyStatic.names = 'ylk';
    return MyStatic;
}());
var m = new MyStatic();
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    Cat.prototype.speak = function () {
        console.log(this.name + '喵喵喵' + this.type);
    };
    return Cat;
}(Animal));
var cat = new Cat('小猫', '猫科');
cat.speak();
