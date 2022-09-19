
/**
 * 
 * Ejemplo de Pilas
 * 
 * 
 */

import { Stack } from "./Stack";



const pila = new Stack(6);

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
console.log("Ultimo elemento : ", pila.peek() );
console.log("Esta vacio : ", pila.isEmpty());
console.log("Esta lleno : ", pila.isFull());

console.log("Esta lleno : ", pila.isFull());
console.log("Ultimo elemento: ",pila.peek());
pila.pop()
console.log("Ultimo elemento: ",pila.peek());



