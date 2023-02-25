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

  lookup(index) {
    let currentNode = this.head;
    let i = 0;

    while (i != index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
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

  insert(index, value) {
    const newNode = new ListNode(value);
    let currentNode = this.head;
    let prevNode = null;
    let i = 0;

    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    while (i < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
  }
}

const lklist = new LinkedList(10);
lklist.append(5);
lklist.append(50);
lklist.prepend(100);
lklist.prepend(200);
lklist.printList();
lklist.insert(300, 300);
lklist.printList();
