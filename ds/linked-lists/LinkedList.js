class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode != null) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(nodes);
  }

  append(value) {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const lklist = new LinkedList(10);
lklist.append(5);
lklist.append(50);
lklist.prepend(100);
lklist.prepend(200);
lklist.printList();
