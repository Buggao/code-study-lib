# 面向对象
## 类的继承
### 一、重写
 - 属性的重写
 - 方法的重写
 - this的指向
 - super
### 二、类型匹配
 鸭子辨型法（叫声像鸭子，走路像鸭子，那就是只鸭子）
 子类可以赋值给父类
 里氏替换原则
### 三、修饰符
 - 只读修饰符： readonly
 - 访问权限修饰符：public private protected
### 四、继承的特性
 - 单根性：每个子类只有一个父类
 - 传递性：C继承B，B继承A，那么A也是C的父类

# 抽象类

## 为什么要抽象类？
一些类是不需要进行实例化的，但是却需要被继承。
如上述的角色基类，不需要被实例化，但是勇士，法师都需要继承该类。
在js中无法做出该限制，而ts中添加```abstract``` 后就无法被初始化。
抽象修饰符可以用在类上也可以用在类的方法上。

## 设计模式 模板模式
当子类需要依次执行funcA，funcB，funC，而这些函数有高度的重合性，就可以将这些函数抽象出来，在父类中实现。
```abstract class Chess {
  x:number = 0;
  y:number = 0;
  name:string = ""
  Move(targetX:number, targetY:number) {
    console.log("1、检查移动的位置是否合理");
    console.log("2、检查位置上是否有棋子");
    this.rule(targetX, targetY);
  }
  protected abstract rule(targetX:number, targetY:number):boolean 
}

class Pawn extends Chess {
  rule(targetX:number, targetY:number):boolean {
    console.log("兵的移动规则");
    return true;
  }
} 

class Knight extends Chess {
  rule(targetX:number, targetY:number):boolean {
    console.log("马的移动规则");
    return true;
  }
}
```

# 静态成员

## 什么是静态成员？

使用 static修饰符
与之相对的是实例成员
静态方法中的this是这个类

## 设计模式 单例模式
