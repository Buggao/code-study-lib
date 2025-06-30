class SuperType {
    interfaceName = "interfaceName"
    interfaceAge = 0
    static className = "supertype"
    #privateName = "privateName"
    constructor(name, age) {
        this.name = name;
        this.interfaceAge = age
    }
    greet() {
        console.log("hi i am", this.name, "i am", this.interfaceAge)
    }
    showName() {
        console.log("my name is", this.#privateName)
    }
    showPrivateName() {
        console.log("#privateName is", this.#privateName);
    }
    changePrivateName(name) {
        this.#privateName = name;
    }   
    static sayMyName() {
        console.log("this.interfaceName", this.className);
    }
}

class SubType extends SuperType  {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    sayHello() {
        console.log("i am sub, my name is", super.name, this.id);
        console.log("i want to get interfaceName", super.className)
        console.log("i want to get privateName")
    }
}

let mySub = new SubType("mysub", 0, 997);

let mySuper = new SuperType("mysuper", "1");

console.log(my)

console.log("mySub is", mySub);
console.log("mySub privable is");
mySub.showPrivateName();
mySub.changePrivateName("newPrivateName");
mySub.showPrivateName();
mySub.sayHello();
mySub.greet();
SuperType.sayMyName();

