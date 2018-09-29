class Queue {
    constructor() {
        this.items = []
    }
    // enqueue() – Adds an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // dequeue() – Removes an element from the queue 
    dequeue() {
        if(this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    // front() – returns the front element of the queue 
    front() {
        // returns the Front element of 
        // the queue without removing it.
        if(this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    // printQueue()– Returns all the elements of an queue. 
    printQueue() {
        let str = "";
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " "
        }
        return str
    }
}
let queue = new Queue();
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
// console.log(queue.front());
// queue.dequeue()
// console.log(queue.front());
// console.log(queue.printQueue())


function generatePrintBinary(n) {
    let q = new Queue();
    q.enqueue(1);
    while (n-- > 0) {
        let s1 = q.front()
        q.dequeue()
        console.log(s1)

        let s2 = s1
        q.enqueue(s1 + "0")
        q.enqueue(s2 + "1")
    }
}
generatePrintBinary(5);