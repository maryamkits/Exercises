class QElement {
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor(){
        this.items = []
    }

    //enqueue() – adds an element to the queue according to its priority. 
    enqueue(item, priority) {
        let qElement = new QElement(element, priority)
        let contain = false;

        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].priority > qElement.priority){
                this.item.splice(i, 0, qElement)
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // dequeue() – Removes an element from the priority queue 
    dequeue(){
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    // front() – returns the front element of the Priority queue 
    front(){
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }
    // rear() – returns the last element of the Priority queue 
    rear(){
        if(this.isEmpty()) return "No elements in Queue"
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    printPQueue(){
        let str = ""
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " ";
        }
        return str;
    }
}
let priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());

priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

console.log(priorityQueue.printPQueue());
console.log(priorityQueue.front().element);
console.log(priorityQueue.dequeue().element);
priorityQueue.enqueue("Sunil", 2);
console.log(priorityQueue.printPQueue());