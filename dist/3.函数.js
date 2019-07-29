"use strict";
/**
 * 函数
 */
// 定义函数类型检测的是函数的参数和返回值
function sum(a, b) {
    return a + b;
}
var getname = function (firstName, lastName) {
    return firstName + lastName;
};
var iter1 = function (it) {
    console.log(it);
};
var iter2 = function (it, index) {
    console.log(it);
};
var iter3 = function (it, isd, arr) {
    console.log(arr);
};
var iterone = function (it, isd, arr) {
    //   return 1;
    return '1';
};
//默认参数 
function ajax(url, mothod) {
    if (mothod === void 0) { mothod = 'GET'; }
    console.log(url);
}
// 剩余参数
function sum2(prefix) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return prefix + args.reduce(function (val, item) { return val + item; }, 0); //求数组和
}
var r = sum2('args', 1, 2, 3, 4, 5); //无限参数，也可以说是剩余参数
console.log(r);
function getType(val) {
    return val;
}
function fun(val) {
    if (typeof val === 'string') {
        return val + val;
    }
    if (typeof val === 'number') {
        return val * 2;
    }
    if (typeof val === 'boolean') {
        return !val;
    }
}
