/*
Ejemplo de Cola


*/

import { Queue } from "./Queue";



const cola = new Queue(5);

console.log("Esta Vacia: ", cola.isEmpty());
console.log("Esta llena: ", cola.isFull());
cola.enqueue(1);
console.log("Esta Vacia: ", cola.isEmpty());
cola.enqueue(21);
cola.enqueue(31);
cola.enqueue(41);
cola.enqueue(51);
cola.enqueue(16);
console.log("Esta llena: ", cola.isFull());
console.log("Elemento frente a la cola : ", cola.front())
console.log("Elemento ultimo a la cola : ", cola.rear())
cola.dequeue();
console.log("Elemento frente a la cola : ", cola.front())
console.log("Elemento ultimo a la cola : ", cola.rear())
