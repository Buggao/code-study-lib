abstract class Chess {
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