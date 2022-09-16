/*
Ejemplo 1.1 de Callback

Tenemos un arreglo que tiene unos elementos y dos funciones
una que muestra los elementos y otra que añade un elemento. Con la diferencia que estos tienen un delay, simulando la asyncronia


Parte 1:
En esta primera parte tenemos las dos funciones mencionadas anteriormente, pero que funcionan correctamente implementandolas
de manera sencilla. Viendo que las funciones las hace secuencialmente.



*/

const users = ["Carlos","Juan","Arturo"];

function addUser(user: string){
    users.push(user);
    console.log("Usuario Añadido \n", user);


}


function getUsers() {
    console.log("Lista de usuarios \n", users);
    
}

// addUser("Jorge")
// getUsers()




/**
 * Parte 2:
 * Ahora lo que hicimos es sencillamente meter dentro de nuestras dos funciones una funcion setTimeOut, la cual lo que nos permite
 * es simular que las funciones tienen ese delay que hablamos al principio. Donde añadir usuario tiene mas delay que mostrar.
 * Ejecutando ahora estas dos funciones en el mismo orden de las anteriores podemos ver que no se ejecuta una despues de la otra
 * Dandonos asi un problema. Ya que primero queriamos añadir al usuario para despues ver que este era añadido correctamente
 * 
 * 
 * 
 */



 function addUserDelay (user: string){
    
    setTimeout(() => {

        users.push(user);
        console.log("Usuario Añadido \n", user);


    },200);


}


function getUsersDelay () {
setTimeout(() => {
    console.log("Lista de usuarios \n", users);
}, 100);
    
}

// addUserDelay("Jorge")
// getUsersDelay()


/**
 * Parte 3:
 * 
 * Pero entonces como resolvemos este problema ? .
 * Si lo que queremos es que se ejecuten en el orden que necesitamos.
 * Primero y antes que nada un ejemplo sencillo de cuando pasa esto es cuando hacemos una peticion a
 * una API o una base de datos. Tambien puede ser si lo que llamamos es una funcion iterativa o recursiva, ya que estas
 * tienen una complejidad mucho mas elevada que una simple funcion.
 * 
 * Para esto una de las soluciones es utilizar un callback. Donde lo que hacemos es encadenar esas funciones de manera sencuencial.
 * Haciendo que entre ellas se puedan pasar por argumento la una a la otra. Teniendo encuenta el orden en el que las queremos llamar.
 * Para el caso anterior lo que hacemos es que como primero queremos añadir el elemento y luego mostrarlo. Pasar la funcion de mostrar por argumento a la
 * de guardar y esta ejecutarla despues de guardar el elemento.
 * 
 * 
 * 
 * 
 */
 function addUserDelayCallback (user: string,callback: Function){
    
    setTimeout(() => {

        users.push(user);
        console.log("Usuario Añadido \n", user);
        callback();

    },200);


}




addUserDelayCallback("Jorge",getUsersDelay)
