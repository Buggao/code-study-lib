"use strict";
class Chess {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.name = "";
    }
    Move(targetX, targetY) {
        console.log("1、检查移动的位置是否合理");
        console.log("2、检查位置上是否有棋子");
        this.rule(targetX, targetY);
    }
}
class Pawn extends Chess {
    rule(targetX, targetY) {
        console.log("兵的移动规则");
        return true;
    }
}
class Knight extends Chess {
    rule(targetX, targetY) {
        console.log("马的移动规则");
        return true;
    }
}
