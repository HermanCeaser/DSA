import LinkedListNode from '../linkedListNode.js';

describe('LinkedListNode', () => {
  it('should create a node with the given value', () => {
    const node = new LinkedListNode(5);
    expect(node.value).toBe(5);
    expect(node.next).toBeNull();
  });

  it('should convert the node to a string', () => {
    const node = new LinkedListNode(10);
    expect(node.toString()).toBe('10');
  });

  it('should create list node with object as a value', () => {
    const nodeValue = { value: 1, key: 'test' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('test');
    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const firstNode = new LinkedListNode(1);
    const secondNode = new LinkedListNode(2);
    firstNode.next = secondNode;

    expect(firstNode.next).toBe(secondNode);
    expect(secondNode.next).toBeNull();
  });
});
