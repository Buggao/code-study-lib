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