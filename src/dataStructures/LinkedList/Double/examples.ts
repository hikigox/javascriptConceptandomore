/*
Ejemplo de lista enlazada Singly

*/

import { LinkedList } from "./LinkedList";
import { Node_ } from "./Node";


const lista = new LinkedList();
const listaConHead = new LinkedList(new Node_(10));

console.log(lista);
console.log(listaConHead);


lista.setHead(new Node_("Nodo Cabeza !"));
console.log(lista);
console.log(listaConHead);

listaConHead.setHead(new Node_("Quiero ser cabeza 😈"));
listaConHead.setNextNode(new Node_("Toco ser nodo de un nodo 😔"));
console.log(listaConHead);

lista.setNextNode(new Node_("Nodo 2 !"))
lista.setNextNode(new Node_("Nodo 3 !"))
lista.setNextNode(new Node_("Nodo 4 !"))
console.log(lista);
console.log(lista.cabeza);
console.log(lista.cabeza.siguiente);
console.log(lista.cabeza.siguiente.siguiente);

console.log("Datos del nodo 2 : ", lista.getNode(2));

console.log(lista);
console.log("Miremos si guarda el nodo cabeza !", lista.cabeza.siguiente.anterior);




