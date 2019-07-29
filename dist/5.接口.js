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
//当用接口描述对象的时候，对一个属性，少一个属性都不行
var pw = {
    name: 'yanglikun',
    speak: function () {
        console.log(this.name);
    }
};
var Per = /** @class */ (function () {
    function Per(name) {
        this.name = name;
    }
    Per.prototype.speak = function () {
    };
    Per.prototype.eat = function () {
        return '垃圾';
    };
    return Per;
}());
var Sb = /** @class */ (function (_super) {
    __extends(Sb, _super);
    function Sb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sb;
}(Per));
var s = new Sb('ni');
console.log(s.eat());
var e1 = {
    id: 1,
    name: '小明',
    age: 26,
    city: '北京'
};
var bbc = {
    name: 'nihao',
    age: 23,
    speak: function () {
    },
    speakchinese: function () {
    }
};
var Bbc = /** @class */ (function () {
    function Bbc(name, age) {
        this.name = name;
        this.age = age;
    }
    Bbc.prototype.speak = function () {
    };
    Bbc.prototype.speakchinese = function () {
    };
    return Bbc;
}());
var d = function (price) {
    return price * .8;
};
var user1 = ['1', '12'];
var user2 = {
    nun: 'ylk'
};
// 构造函数类型 在TS 中我们可以用interface来描述类
// 同时页可以使用interface里特殊的new() 关键字来描述类的构造函数类型
var Anim = /** @class */ (function () {
    function Anim(name) {
        this.name = name;
    }
    return Anim;
}());
function createAnim(clazz, name) {
    return new clazz(name);
}
var asd = createAnim(Anim, 'yyy');
console.log(asd.name);
