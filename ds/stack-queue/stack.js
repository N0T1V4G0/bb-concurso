class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }
}

const st = new Stack();
st.push('hey');
st.push('hey2');
st.push('hey3');
st.push('hey4');
st.peek();
console.log(st);
