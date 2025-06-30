/**
 * js中有三种类型声明方式
 * function jsFoo(name) { 
 *  return name.length
 * }
 * const jsFunc = function(name) {     
 *  return name.length
 * }
 * const arrowFunc = (name) => name.length
 *  
 */

// 最简单的函数类型标注
function foo(name: string): number {
    return name.length;
}

const tsFunc2 = function(name:string): number {
  return name.length;
}

const arrFunc = (name: string):number => name.length
// 变量形式的类型标注
const tsFunc: (name: string) => number = function(name) {
    return name.length;
}


// 但这种形式的声明看起来比较混乱，不好维护。
// 因此，一般不推荐这么使用，要么直接在函数中进行参数和返回值的类型声明，要么使用类型别名将函数声明抽离出来

type FuncMine = (name: string) => number;

const funcMine: FuncMine = (name) => name.length

interface MyFunc {
    (message: number): number;
}

interface MyBigFunc extends MyFunc {
    (message: string): number;
} 

const myFunc:MyFunc = (message:number) => message

const myBigFunc: MyBigFunc = (message: string| number) => {
    if(typeof message == "number") return message
    return message.length
}

// 函数使用type与使用interface声明有什么区别
// 通常纯函数是使用type的方式
// 通常是使用类型别名进行函数声明，类型别名有更好的联合类型和交叉类型，
// 而interface需要使用extends方法，且extends后更像是重载的问题。

// 函数重载
function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number

function format(data: string): string;
function format(data: number): string;
function format(data: boolean): "是" | "否";
function format(data: any): string {
  // 实现...
  return data.toString()
}

function testFunc(name:boolean | number) {
  return +name
}