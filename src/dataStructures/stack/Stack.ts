/**
 * 
 * Clase Pila
 * 
 * Donde este tiene se le da un tamaño fijo
 * 
 */


export class Stack{
    private stack : Array<any>;
    private size: number;
    constructor(size: number){
        this.stack = [];
        this.size = size;



    }
    
    push (element:any){
        if (  this.stack.length < this.size){
            this.stack.push(element);
        }
        else {

            console.log("Pila llena !");
            

        }
    
        
    }
    
    pop(){

        if (this.stack.pop() === undefined){
            console.log("Sin elementos en la pila");

        } 

    }


    isEmpty (){
        return this.stack.length === 0;


    }
    isFull (){
        return this.stack.length === this.size;
    }

    peek () : any{
        return this.stack.at(-1);
    }

}