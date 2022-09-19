"use strict";
/*
Ejemplo de lista enlazada Singly

*/
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const Node_1 = require("./Node");
const lista = new LinkedList_1.LinkedList();
const listaConHead = new LinkedList_1.LinkedList(new Node_1.Node_(10));
console.log(lista);
console.log(listaConHead);
lista.setHead(new Node_1.Node_("Nodo Cabeza !"));
console.log(lista);
console.log(listaConHead);
listaConHead.setHead(new Node_1.Node_("Quiero ser cabeza 😈"));
listaConHead.setNextNode(new Node_1.Node_("Toco ser nodo de un nodo 😔"));
console.log(listaConHead);
lista.setNextNode(new Node_1.Node_("Nodo 2 !"));
lista.setNextNode(new Node_1.Node_("Nodo 3 !"));
lista.setNextNode(new Node_1.Node_("Nodo 4 !"));
console.log(lista);
console.log(lista.cabeza);
console.log(lista.cabeza.siguiente);
console.log(lista.cabeza.siguiente.siguiente);
console.log("Datos del nodo 2 : ", lista.getNode(2));
//# sourceMappingURL=examples.js.map