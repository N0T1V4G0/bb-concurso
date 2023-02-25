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

    while (i < index) {
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

  remove(index) {
    if (index > this.length) throw new Error('index out of range');
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    let leaderNode = this.lookup(index - 1);
    let toBeDeletedNode = leaderNode.next;
    leaderNode.next = toBeDeletedNode.next;
    this.length--;
    return this;
  }
}

const ll = new LinkedList(10);
ll.append(20);
ll.append(50);
ll.prepend(100);
ll.prepend(200);
ll.printList();
ll.remove(0);
ll.printList();
ll.remove(3);
ll.printList();
