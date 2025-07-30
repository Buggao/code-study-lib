class TwoForkTree {
    constructor(root, left, right) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
}

const myTree = new TwoForkTree(1, new TwoForkTree(2, null, null), new TwoForkTree(3, null, null))