/**
 * Clase de Cola
 * 
 * 
 */


export class Queue {

    private queue:Array<any>;
    private size: number;

    constructor(size: number){
        this.queue = []
        this.size= size;


    }


    enqueue (element: any){
        if (this.queue.length < this.size){
            this.queue.push(element)
        }else{
            console.log("Fila llena");
            

        }
    }

    dequeue (){
        this.queue.shift();
    }


    front ():any{
        return this.queue[0];


    }
    
    rear ():any{
        
        return this.queue.at(-1);

    }
    
    isEmpty(){
        return this.queue.length === 0;


    }

    isFull(){
        return this.queue.length === this.size;

    }
}