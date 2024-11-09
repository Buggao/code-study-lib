class Node(value, next=null) {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}

let c = new Node(1);
let b = new Node(2, c);
let a = new Node(3, b);

console.log(a)