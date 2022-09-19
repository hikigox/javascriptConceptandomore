"use strict";
/**
 *
 * Ejemplo de Pilas
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack");
const pila = new Stack_1.Stack(6);
console.log("Esta vacio : ", pila.isEmpty());
console.log("Esta lleno : ", pila.isFull());
pila.push("hola");
pila.push("Como");
pila.push("Estas");
pila.push("Como");
pila.push("Estas");
pila.push("Como");
pila.push("Estas");
console.log("Esta vacio : ", pila.isEmpty());
console.log("Esta lleno : ", pila.isFull());
console.log("Ultimo elemento : ", pila.peek());
console.log("Esta vacio : ", pila.isEmpty());
console.log("Esta lleno : ", pila.isFull());
console.log("Esta lleno : ", pila.isFull());
console.log("Ultimo elemento: ", pila.peek());
pila.pop();
console.log("Ultimo elemento: ", pila.peek());
//# sourceMappingURL=example.js.map