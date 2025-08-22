import LinkedList from '../linkedList.js';

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should initialize with no elements', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.size).toBe(0);
  });

  it('should append elements correctly', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.size).toBe(3);
  });

  it('should prepend elements correctly', () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);

    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.size).toBe(3);
  });

  it('should insert elements at specific positions', () => {
    linkedList.append(1);
    linkedList.append(3);
    expect(linkedList.size).toBe(2);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);

    linkedList.insert(2, 1); // Insert 2 at position 1

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.size).toBe(3);
  });
});
