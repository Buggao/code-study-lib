class TopClass {
    topClassName = "top class"
    static innerName = "TOPCLASS"
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static showTopClassName() {
        console.log("in static method, this.top", this)
    }
    showMyId() {
        console.log("i am", this.id)
    }
}

class SubClass extends TopClass {
    subclassName = "sub class";
    static SubClassName = "SUBCLASS";
    constructor(subName, name, id) {
        super(name, id);
        this.subName = subName;
    }
    showMyName() {
        super.showMyId();
        console.log("my name is", this.name,)
    }
}

// let subClass1 = new SubClass("subClass1", "subclass", 1);

// console.log(subClass1);

// console.log("===================");

// subClass1.showMyName();

// 匿名形式
const Circle = class {
  constructor(r) {
    this.radius = r;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
};

// 具名形式
const Triangle = class Polygon {
    static name = "polygon";
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  area() {
    return 0.5 * this.base * this.height;
  }
};

const newTriangle = new Triangle(3, 4)

console.log(newTriangle.area())

console.log(TopClass.innerName)