function solution(priorities, location) {
  let result = 0;

  while (priorities.length > 0) {
    const current = priorities.shift();

    if (priorities.some((p) => p > current)) {
      priorities.push(current);
    } else {
      result++;
      if (location === 0) return result;
    }

    location = location === 0 ? priorities.length - 1 : location - 1;
  }

  return result;
}


// class Node {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//       this.head = null;
//       this.tail = null;
//   }

//   enqueue(newValue) {
//       const newNode = new Node(newValue);
//       if (this.head === null) {
//           this.head = this.tail = newNode;
//       } else {
//           this.tail.next = newNode;
//           this.tail = newNode;
//       }
//   }

//   dequeue() {
//       const value = this.head.value;
//       this.head = this.head.next;
//       return value;
//   }

//   peek() {
//       return this.head.value;
//   }
// }

// function solution(priorities, location) {
//   const queue = new Queue();

//   for (let i = 0; i < priorities.length; i++) {
//       queue.enqueue([priorities[i], i]);
//   }

//   priorities.sort((a, b) => b - a);
  
//   let count = 0;
//   while(true) {
//       const currentValue = queue.peek();
//       if (currentValue[0] < priorities[count]) {
//           queue.enqueue(queue.dequeue());
//       } else {
//           const value = queue.dequeue();
//           count++;
//           if (value[1] === location) {
//               return count;
//           }
//       }
//   }
// }