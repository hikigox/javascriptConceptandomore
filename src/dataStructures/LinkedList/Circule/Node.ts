


/*
 *
    Clase nodo :
    elemento : valor que se guarda en el nodo
    next : el siguiente nodo 

 */

import { Nodes_Generic } from "../Node_generic";


export class Node_ extends Nodes_Generic{
    siguiente:Node_|null;
    circulate: Node_|null;
    constructor(element : any){
        super(element);
        this.siguiente = null;
    }



}