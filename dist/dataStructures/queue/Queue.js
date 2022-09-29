"use strict";
/**
 * Clase de Cola
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor(size) {
        this.queue = [];
        this.size = size;
    }
    enqueue(element) {
        if (this.queue.length < this.size) {
            this.queue.push(element);
        }
        else {
            console.log("Fila llena");
        }
    }
    dequeue() {
        this.queue.shift();
    }
    front() {
        return this.queue[0];
    }
    rear() {
        return this.queue.at(-1);
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    isFull() {
        return this.queue.length === this.size;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map