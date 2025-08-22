import LinkedListNode from './linkedListNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;

    return this;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) {
      throw new Error('Invalid position');
    }

    const newNode = new LinkedListNode(value);
    if (position === 0) {
      return this.prepend(value);
    } else if (position === this.size) {
      return this.append(value);
    }

    let current = this.head;
    let previous;
    let index = 0;

    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    previous.next = newNode;
    newNode.next = current;
    this.size++;

    return this;
  }
}
