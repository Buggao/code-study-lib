class Animal {
    static type = "string"
    #enable = "yes"
    constructor(name) {
        this.name  = name
    }
    showType() {
        console.log(this.#enable)
    }
    changeEnable(value) {
        this.#enable = value == "yes" ? "yes" : "no"; 
    }
}

let myAnimal = new Animal("suzhou");
let herAnimal = new Animal("shanghai");
console.log(Animal.type)
myAnimal.showType();
myAnimal.changeEnable("no");
myAnimal.showType();
herAnimal.showType();