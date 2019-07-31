/**
 * 交叉类型
 * 是将多个类型转成一个类型
 */
interface Birdss{
    name:string;
    fly():void;
}
interface Persons{
    name:string;
    eat():void;
}
// 取的是接口中属性的并集
type BirdMan = Birdss & Persons;
let bm: BirdMan = {
    name: 'ylk',
    fly(){},
    eat(){},
}

/**
 * typeof 获取变量类型
 */
let pd = {
    name: 'yanglikun',
    age: 1,
    isMen: true,
}
type PSS = typeof pd;

let pds:PSS = {
    name: '11',
    age: 2,
    isMen: false,
} 

/**
 * 索引访问操作符
 * 可以通过[]获取一个类型的子类型
 */
interface Nat{
    name: string;
    job: {
        name:string
    };
    hobbies: {
        name:string,
        level:number
    }[];
}
let nfe:Nat['job'] = {
    name: '前端'
}
let hobbyLevel :Nat['hobbies'][0]['level'] = 10;

/**
 * keyof
 * 索引类型查询操作符
 */
interface Pkey {
    name:string;
    age: number;
}

function getValueByKey(p:Pkey,key: keyof Pkey) {
    return p[key];
}
let pk:Pkey = {
    name: '123',
    age: 1
}
// getValueByKey(pk,'name') 
// getValueByKey(pk,'age') 
// getValueByKey(pk,'aga') 报错

/**
 * 映射类型
 * 在定义的时候用in操作符去批量定义类型中的属性
 */
interface Pkey1 {
    name:string;
    age: number;
}

type Prkey = {
    [key in keyof Pkey1]?:Pkey1[key]; // 批量定义属性
}
let prk:Prkey = {
    name: '123', // 一个属性也不会报错
    // bb: '' 报错
}