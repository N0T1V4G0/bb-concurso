class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };
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
