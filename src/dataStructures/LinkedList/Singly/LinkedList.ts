/*
Clase de Lista enlazada Singly

*/

import { Node_ } from "./Node";



export class LinkedList {
    cabeza:Node_;
    size: number;

    constructor(head?: Node_){
        this.cabeza = head || null;
        this.size= head ? 1 :0;

    }


    /**
     * Guarda una cabezera para la lista enlazada
     * 
     * @param node : Nodo cabezera que se le quiere ingresar a la lista
     */
    setHead (node : Node_){
        if (this.cabeza ) {console.log("Ya existe una Cabezera");
        }else{
            this.cabeza = node;
            this.size = 1;
        }


    }  

    /**
     * guarda un nodo en el ultimo nodo
     * 
     * @param node : nuevo nodo que se quiere enlazar a el ultimo nodo
     */

    setNextNode(node : Node_) {
        this.getNode(this.size).siguiente = node;
        this.size += 1;

    }

    /**
     * metodo que retorna un nodo segun el indice 
     * 
     * @param indexNode : Posicion del nodo en la lista
     * @returns : nodo en la posicion ingresada
     */
    getNode(indexNode : number): Node_{
        
        if (indexNode <= this.size){
            let currentNode = this.cabeza;
            for (let i = 1; i < indexNode; i++) {
                currentNode = currentNode.siguiente;
            }   

            return currentNode;
        }else{
            console.log("Overflow ranges no valid");
            
        }
        
    }


/**
 * 
 * @param indexNode : posicion del nodo que se quiere eliminar
 */

    deleteNode(indexNode: number){
        this.getNode(indexNode-1).siguiente = null; 
        

        


    }



}