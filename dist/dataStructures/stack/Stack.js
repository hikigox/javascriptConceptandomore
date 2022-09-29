"use strict";
/**
 *
 * Clase Pila
 *
 * Donde este tiene se le da un tamaño fijo
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(size) {
        this.stack = [];
        this.size = size;
    }
    push(element) {
        if (this.stack.length < this.size) {
            this.stack.push(element);
        }
        else {
            console.log("Pila llena !");
        }
    }
    pop() {
        if (this.stack.pop() === undefined) {
            console.log("Sin elementos en la pila");
        }
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    isFull() {
        return this.stack.length === this.size;
    }
    peek() {
        return this.stack.at(-1);
    }
}
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map