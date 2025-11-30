class User {
  constructor(public name: string, public age: number) {
  }
  sayName() {
    console.log(this.name);
  }
}

function printUserProp(user: User, prop: keyof User) {
  console.log(user[prop]);
};

const user = new User("张三", 18);
printUserProp(user, "sayName");