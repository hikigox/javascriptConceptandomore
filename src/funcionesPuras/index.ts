
/**
 * 
 * Funciones puras 
 * 
 * 
 * Las funciones puras son funciones que si le pasamos siempre
 * el mismo argumento nos tiene que retornar siempre la misma respuesta
 * 
 * 
 * 
 * 
 */


/***
 * 
 * Funcion que hace una suma 
 * 
 * 
 */


function pureSum(a: number, b: number): number {
    return a + b;
}



/*
 * 
 *Retornar un objeto nuevo y no mutado
 *  
 * 
 * 
 */


 const objeto = {nombre: 'Carlos', edad: '22'};



 function newObject(objetoPass:Object) : Object {
    
    return {...objetoPass, edad: '19'}


 }


const objetoNuevo = newObject(objeto);

console.log(objetoNuevo);
console.log(objeto);



