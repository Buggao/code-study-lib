"use strict";
class Character {
    constructor() {
        this.name = "character";
        this.health = 100;
        this.mana = 50;
        this.agility = 10;
    }
    attack() {
        console.log(`${this.name} performs a basic attack.`);
    }
    special_attack() {
        console.log(`${this.name} performs a powerful special attack.`);
    }
}
// 勇士
class Warrior extends Character {
    constructor() {
        super(...arguments);
        // 重写父类属性, 只能更改值，不能更改类型
        // 例如： name = 10 ❌
        this.name = "warrior";
        this.health = 120;
        this.mana = 20;
        this.strength = 15;
    }
    /* 重写父类的属性 一样不能进行修改，对参数传值都有严格的要求
    * 如果一定要对参数等进行修改，有两种处理方法：
    *  1、不使用父类里的方法
    *  2、将值改为属性
    * */
    /** 在类里属性的this指向自身 */
    attack() {
        console.log(`${this.name} swings a mighty sword with strength ${this.strength}.`);
    }
    special_attack() {
        console.log(`${this.name} Raise the sword and strike downwards with a blue light.`);
    }
}
// 法师
class Mage extends Character {
    constructor() {
        super(...arguments);
        this.name = "mage";
        this.health = 80;
        this.mana = 120;
        this.intelligence = 15;
    }
    attack() {
        console.log(`${this.name} casts a powerful spell with intelligence ${this.intelligence}.`);
    }
    // 需要访问父类的属性可以直接用this，但当子类重写了父类的属性后，使用super可以访问父类的属性
    base_attack() {
        super.attack();
    }
}
let base = new Character();
let fstWarrior = new Warrior();
// new 一个子类的对象，但是可以声明为父类的类型
let fstMage = new Mage();
// 但该变量只能访问父类上的类型，如果想要使用子类的属性 则需要 instanceof 判断
// fstMage.intelligence 错误 ❌ Character上不存在intelligence属性
if (fstMage instanceof Mage) {
    console.log(`${fstMage.name} has ${fstMage.intelligence} points intelligence.`);
}
console.log("me is", base);
console.log("fstWarrior is", fstWarrior);
base.attack();
fstWarrior.attack();
