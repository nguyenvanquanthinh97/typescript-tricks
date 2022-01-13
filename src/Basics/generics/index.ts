class Queue<T> {
  data: T[] = [];
  public push(item: T) {
    this.data.push(item);
  }
  public pop(): T | undefined {
    return this.data.pop();
  }
}

const queue = new Queue<number>();

queue.push(123);
queue.push(456);

console.log(queue.pop()?.toPrecision(1));
console.log(queue.pop()?.toPrecision(1));
