


/*
 *
    Clase nodo :
    elemento : valor que se guarda en el nodo
    next : el siguiente nodo 

 */


export class Node_ {
    element : any;
    siguiente: Node_|null;
    anterior: Node_|null;
    constructor(element : any){
        this.element = element;
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