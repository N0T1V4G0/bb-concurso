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
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const newNode = new ListNode(value);

    const leaderNode = this.lookup(index - 1);
    const nextNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
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
ll.insert(2, 0);
ll.printList();
