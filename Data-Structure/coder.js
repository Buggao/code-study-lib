class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkNodeList {
  constructor() {
      this.head = null;
      this.length = 0;
  }
  append(value) {
      let node = new Node(value);
      if(this.head) {
          let preNode = this.head;
          while(preNode.next) {
              preNode = preNode.next;
          }
          preNode.next = node; 
      } else {
          this.head = node;
      }
      this.length++;
  }
  printf(){
    if(!this.head) { console.log("empty"); return }
      let currentNode = this.head
      let result = ""
      do {
          result += (currentNode.value + "=>")
          currentNode = currentNode.next
      } while(currentNode.next)
        result += currentNode.value
      console.log(result)
  }
}

let nodeLink = new LinkNodeList();
nodeLink.append(1);
nodeLink.append(2);
nodeLink.append(3);
nodeLink.append(4);

// console.log(nodeLink);

var hasCycle = function(head) {
  let cache = new Set();
  while(head) {
      if(cache.has(head)) {
          return true
      } else {
          cache.add(head);
      }
      head = head.next
  }
  return false
};


