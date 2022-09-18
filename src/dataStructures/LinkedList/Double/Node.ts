


/*
 *
    Clase nodo :
    elemento : valor que se guarda en el nodo
    next : el siguiente nodo 

 */

import { Nodes_Generic } from "../Node_generic";


export class Node_ extends Nodes_Generic{
    siguiente:Node_|null;
    anterior: Node_|null;
    constructor(element : any){
        super(element);
        this.siguiente = null;
        this.anterior = null;
    }


    setBeforeNode(node : Node_) : Node_{
        this.anterior = node;

        return this;

    }

    changePreviewNode(data: any) {
        this.anterior.element = data;


    }

}