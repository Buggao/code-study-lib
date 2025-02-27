
class Character {
  name:string = "character";
  health: number = 100;
  mana: number = 50;
  agility: number = 10;
  attack(): void {
    console.log(`${this.name} performs a basic attack.`)
  }
  special_attack(): void {
    console.log(`${this.name} performs a powerful special attack.`)
  } 
}

// 勇士
class Warrior extends Character {
  // 重写父类属性, 只能更改值，不能更改类型
  // 例如： name = 10 ❌
  name: string = "warrior";
  health: number = 120;
  mana: number = 20;   
  strength: number = 15;
  /* 重写父类的属性 一样不能进行修改，对参数传值都有严格的要求
  * 如果一定要对参数等进行修改，有两种处理方法：
  *  1、不使用父类里的方法
  *  2、将值改为属性
  * */
 /** 在类里属性的this指向自身 */
  attack(): void {
    console.log(`${this.name} swings a mighty sword with strength ${this.strength}.`)
  }
  special_attack(): void {
    console.log(`${this.name} Raise the sword and strike downwards with a blue light.`)
  } 
}

// 法师
class Mage extends Character {
  name: string = "mage";
  health: number = 80;
  mana: number = 120;
  intelligence: number = 15;
  attack(): void {
    console.log(`${this.name} casts a powerful spell with intelligence ${this.intelligence}.`)
  }
  // 需要访问父类的属性可以直接用this，但当子类重写了父类的属性后，使用super可以访问父类的属性
  base_attack(): void {
    super.attack();
  }
}

let base = new Character();
let fstWarrior = new Warrior();
// new 一个子类的对象，但是可以声明为父类的类型
let fstMage: Character = new Mage();
// 但该变量只能访问父类上的类型，如果想要使用子类的属性 则需要 instanceof 判断
// fstMage.intelligence 错误 ❌ Character上不存在intelligence属性
if(fstMage instanceof Mage) {
  console.log(`${fstMage.name} has ${fstMage.intelligence} points intelligence.`)
}

console.log("me is", base);
console.log("fstWarrior is", fstWarrior);
base.attack();
fstWarrior.attack();