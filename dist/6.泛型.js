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
 * 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型
 * 而在使用的时候再指定类型的一种特性
 * 泛型<T> 作用域只限于函数内部使用。
 */
function createArray(length, val) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = val;
    }
    return arr;
}
/**
 * 示例如下
 */
function createArray2(length, val) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = val;
    }
    return arr;
}
createArray2(3, 'x');
//createArray2<string>(3, 3); // 报错
createArray2(3, 3); // 不报错
// 类数组  不是数组类型比如 arguments
function sum1223() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    //let a2:number[] = arguments; // 报错
    var a2 = arguments;
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
var MyArr = /** @class */ (function () {
    function MyArr(list) {
        this.list = list;
    }
    MyArr.prototype.add = function (val) {
        this.list.push(val);
    };
    MyArr.prototype.getFirst = function () {
        return this.list[0];
    };
    return MyArr;
}());
var ma = new MyArr([1, 2, 3, 4, 5]);
var mas = new MyArr(['1', '2', '3', '4', '5']);
var sum3 = function (a, b) {
    return a + b;
};
/**
 * 泛型可以有多个
 * tuple 长度和类型确定的数组
 */
function swap(a) {
    return [a[1], a[0]];
}
function logger(val) {
    console.log(val.length);
}
var cart = ['a', 'b'];
var cart2 = [2, 3, 4, 5];
// 接口的兼容性
// 在检查参数类型的时候，并不是真正的比较的接口类型，而是比较具体的属性是否兼容。
// 基本数据类型的兼容性
var num;
var strs = '1';
num = strs;
var num2;
num2 = strs;
/**
 * 类的兼容性
 * 父子之间能不能赋值跟父类子类没有关系，跟属性是否满足；
 */
var Ps = /** @class */ (function () {
    function Ps() {
        this.names = '';
    }
    return Ps;
}());
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 0;
        return _this;
    }
    return Cd;
}(Ps));
var p11 = new Ps();
var c11 = new Cd();
var p111 = c11;
var sum11;
var sum111;
sum11 = function (a, b) {
    return a + b;
};
sum111 = function (a) {
    return a;
};
var gp = function (a) {
    return {
        name: 'ss', age: 2
    };
};
var logss;
logss = function (val) {
    console.log(val);
};
var x11;
var y111 = {};
x11 = y111; // 因为是空
var a111 = {
    date: '123'
};
var b111 = {
    date: 123
};
//a111= b111; //报错
/**
 * 链判断运算符
 * 1. 链判断运算符是一种先勘查属性是否存在，在尝试访问该属性的运算符，其符号为 ？
 * 2. 如果运算符左侧的操作数？.计算为null/undefined,则表达式求值为undefined。否则正常触发目标属性访问，方法，或函数调用
 */
var namesss = {
    name: 'yanglikun'
};
function getButten(btn) {
    if (btn.name === 'type1') {
        console.log(btn.text1);
    }
    if (btn.name === 'type2') {
        console.log(btn.text2);
    }
}
function getAnimoal(anim) {
    if ('swing' in anim) {
        console.log(anim.swing);
    }
    if ('leg' in anim) {
        console.log(anim.leg);
    }
}
// 自定义保护函数
function iSBird(x) {
    return x.swing > 0;
    // return (<Bird2>x).swing>0;
}
// 如果是鸟的话，返回鸟的翅膀个数，如果是God返回腿的个数
function getAnimoal1(anim) {
    if (iSBird(anim)) {
        console.log(anim.swing);
    }
    if (!iSBird(anim)) {
        console.log(anim.leg);
    }
}
var b1s = {
    swing: 2
};
getAnimoal1(b1s);
