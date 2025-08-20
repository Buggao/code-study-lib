class MyObj {
    private counter: number = 0;
    constructor(public name: string) {
        this.name = name;
        this.counter++;
    }

    public getCounter() {
        return this.counter;
    }
}

let myObj1 = new MyObj("Tone");
let myobj2 = new MyObj("Jack");

function showLog<T>(a:T[]):T{
    console.log("a is", a);
    return a[1];
}
showLog(["123", 456, {}, []]);
console.log(myObj1.getCounter());

const myObj = {
    name: "tong",
    age: 25
}

myObj.age = 26

type ReadOnlyObj = {
    readonly name: string,
    readonly age: number
}

let youObj: ReadOnlyObj = {
    name: "you",
    age: 26
}

// 定义一个加法函数类型：接收两个 number 参数，返回 number
type AddFunction = (a: number, b: number) => number;
const add:AddFunction = (a, b) => {
    return a+b
}
  