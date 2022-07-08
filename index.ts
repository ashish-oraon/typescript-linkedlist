// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Node {
  value: number;
  next: Node;
  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}
class Linkedlist {
  head: Node;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(newNode: Node) {
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentHead = this.head;
      while (currentHead.next !== null) {
        currentHead = currentHead.next;
      }
      currentHead.next = newNode;
      this.size++;
    }
  }
  deleteNode() {
    if (this.head === null) {
      //no element in the linkedlist
      console.log('Cannot delete node as the linkedlist is empty');
      return -1;
    } else if (this.head.next == null) {
      //Single element in the linkedlist
      this.head = null;
    } else {
      let currentHead = this.head;
      while (currentHead.next.next !== null) {
        currentHead = currentHead.next;
      }
      currentHead.next = null;
      this.size--;
    }
  }
  getSize() {
    return this.size;
  }
  print = (head?: Node) => {
    head = head ? head : this.head;
    if (head === null) {
      console.log('There are no elements in the linkedlist');
    } else {
      let dataArr = [];
      let currentHead = head;
      while (currentHead.next !== null) {
        dataArr.push(currentHead.value);
        currentHead = currentHead.next;
      }
      dataArr.push(currentHead.value);
      console.log(`${dataArr}`);
    }
  };
  reverse = () => {
    console.log('Going for reversal \nInput Linkedlist:');
    this.print(this.head);
    if (this.size > 1) {
      let prev = null;
      let current = this.head;
      let next = null;
      while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
      console.log(`After reversing will look like:`);
      this.print(this.head);
    } else {
      console.log('Reversal not possible');
    }
    // }
  };
}

function main() {
  let newLinkedlist = new Linkedlist();
  newLinkedlist.addNode(new Node(1));
  newLinkedlist.addNode(new Node(2));
  newLinkedlist.print(newLinkedlist.head);
  newLinkedlist.deleteNode();
  newLinkedlist.print(newLinkedlist.head);
  newLinkedlist.deleteNode();
  newLinkedlist.print(newLinkedlist.head);
  newLinkedlist.deleteNode();

  let linkedlistTobeReversed = new Linkedlist();
  linkedlistTobeReversed.addNode(new Node(100));
  linkedlistTobeReversed.addNode(new Node(200));
  linkedlistTobeReversed.addNode(new Node(300));
  linkedlistTobeReversed.addNode(new Node(400));
  console.log(linkedlistTobeReversed.getSize());
  linkedlistTobeReversed.reverse();
  linkedlistTobeReversed.print();
}

main();
