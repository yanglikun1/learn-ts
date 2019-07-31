## TypeScript
1. 是由微软开发的一款开源的编程语言
2. 是JavaScript的超集，遵循最新对的ES5/ES6规范。 拓展了JavaScript
3. 更像后端JAVA，C#这样的面向对象语言让JS开发大型企业应用
4. 越来越多的项目基于TS，比如 VScode,angular6,Vue3,REact16
5. TS提供的类型系统可以帮助我们在写代码的时候提供更丰富的语法提示
6. 在创建前的编译阶段经过类型系统的检查，就可以避免很多线上的错误

## 安装
 > npm i typescript -g
 > tsc --init 生成ts配置文件
 ```js
 {
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* 启用增量编译*/
    "target": "es5",                          /* 指定ecmascript目标版本：“es3”（默认）、“es5”、“es2015”、“es2016”、“es2017”、“es2018”、“es2019”或“esnext”。 */
    "module": "commonjs",                     /* 指定模块代码生成：“none”、“commonjs”、“amd”、“system”、“umd”、“es2015”或“esnext”。 */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    "strictNullChecks": true,              /* 启用严格的空检查。null 只能赋值给null */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  }
}
 ```

 > tsc --watch 监听ts变化生成js

 ## Ts中的基本数据类型
 - string
 - number
 - boolean
 - undefined
 - null
 - symbol
 > 枚举
 > 元组
 >void & never
 
 ```js
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
function sum():never {
    while(true) {

    }
    console.log(1);
}

function getname(): void{
    console.log(1);
   // return 1; // 不能将类型“1”分配给类型“void”。
//    return null; // 不能将类型“null”分配给类型“void”。 严格检测
    //  return undefined // void可以 接收undefined
}
// never 和 void 的区别
// void可以被赋值为null（非严格Null检查）和undefined，never 则是一个不包含值的类型。
// 拥有void返回值类型的函数能正常运行，拥有never返回值类型的函数无法正常返回，无法种植，或会抛出异常。
 ```

## 联合类型
```js
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

```
## 抽象类 VS 接口
1. 不同类之间公有的属性或方法，可以抽象成一个接口(Interfaces)
2. 而抽象类是提供其他类继承的基类，抽象类不允许被实例化，抽象类中的抽象方法必须在子类中被实现
3. 抽象类本质是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能够用于描述，既不能提供方法实现，也不为属性进行初始化
4. 一个类可以继承一个类或抽象类，但可以实现(implements)多个接口
5. 抽象类可以实现接口

## 重写vs 重载
1. 重写是指子类重写继承自父类中的方法
2. 重载是指为同一个函数提供多个类型的定义
## 继承和多态
1. 继承子类继承父类，子类除了拥有父类所有的特性外，还有一些更具体的特性
2. 多态 由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。

## 泛型接口VS泛型别名
1. 接口创建了一个新名字，它可以在其他任意地方被调用。而类型别名并不创建新的名字，例如报错信息就不会使用别名
2. 类型别名不能被 extends和implements 这时我们应该尽量使用接口代替类型别名
3. 当我们需要使用联合类型或者元祖类型的时候，类型别名会更合适。
