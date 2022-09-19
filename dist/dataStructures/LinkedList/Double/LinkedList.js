"use strict";
/*
Clase de Lista enlazada doblemente

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LinkedList {
    constructor(head) {
        this.cabeza = head || null;
        this.size = head ? 1 : 0;
    }
    /**
     * Guarda una cabezera para la lista enlazada
     *
     * @param node : Nodo cabezera que se le quiere ingresar a la lista
     */
    setHead(node) {
        if (this.cabeza) {
            console.log("Ya existe una Cabezera");
        }
        else {
            this.cabeza = node;
            this.size = 1;
        }
    }
    /**
     * guarda un nodo en el ultimo nodo
     *
     * @param node : nuevo nodo que se quiere enlazar a el ultimo nodo
     */
    setNextNode(node) {
        if (this.cabeza) {
            const previewNode = this.getNode(this.size);
            previewNode.siguiente = node.setBeforeNode(previewNode);
            this.size += 1;
        }
        else {
            console.log("Overflow not head");
        }
    }
    /**
     * metodo que retorna un nodo segun el indice
     *
     * @param indexNode : Posicion del nodo en la lista
     * @returns : nodo en la posicion ingresada
     */
    getNode(indexNode) {
        if (indexNode <= this.size) {
            let currentNode = this.cabeza;
            for (let i = 1; i < indexNode; i++) {
                currentNode = currentNode.siguiente;
            }
            return currentNode;
        }
        else {
            console.log("Overflow ranges no valid");
        }
    }
    /**
     *
     * @param indexNode : posicion del nodo que se quiere eliminar
     */
    deleteNode(indexNode) {
        this.getNode(indexNode - 1).siguiente = null;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map