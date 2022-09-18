/*
 * Arreglos
 * 
 * Aqui miraremos algunas de las formas en las que podemos usar un arreglo en javascript de manera avanzada
 * 
 */


// declaracion de arreglo de solo numeros con typescript
const arregloP: number[] = [];

console.log(arregloP);




/*
 * mutacion en arreglos (javascript)
 * 
 * Javascript al ser un tipo de dato de paso por referencia podemos cambiar el valor de un arreglo si tratamos de guardarlo.
 * Veamos como es esto y como podemos solucionarlo
 * 
 * 
 * 
 */


arregloP.push(1,2,3,4);

// ESTO ES NO ES UNA FUNCION PURA !!!!!!!!!!!!
function pasoPorreferenciaArreglo(newArreglo:number[]) {
    newArreglo = arregloP;
    newArreglo.push(66);
    console.log("Mira como los dos cambian su valor !");
    
    console.log("Arreglo principal ",arregloP);
    console.log("nuevo arreglo",newArreglo);

}

// pasoPorreferenciaArreglo([]);


/*
Sigue siendo una funcion no pura porque retorna un log.
Pero esta ves si vemos no cambio el valor en el arreglo principal. Esto es porque
el arreglo segundario esta generando un nuevo arreglo con los valores del arreglo principal.
Esto se puede gracias a el operador spread que nos permite clonar un arreglo.

*/

function pasoPorreferenciaArregloSinModificar(newArreglo:number[]) {
    newArreglo = [...arregloP];
    newArreglo.push(66);
    console.log("Mira como no cambia su valor !");
    
    console.log("Arreglo principal ",arregloP);
    console.log("nuevo arreglo",newArreglo);
    
}

pasoPorreferenciaArregloSinModificar([]);
/*
Utilizando el metodos de arreglos
Metodos:
callback: predicado

pop: Elimina y retorna el ultimo elemento de un arreglo
unshift : Añade un elemento al inicio del arreglo
shift: elimina el primer elemento de un arreglo
indexOf: busca en el arreglo el elemento a buscar y retorna la posicion, si no esta retorna -1.
slice: Eliminar un elementos de una lista segun un rango slice(pos,n). Donde pos es la pocion donde se va
a empezar a eliminar y n son los elementos desde esa posicion que se eleminan. Tambien podemos hacer copia de un arreglo
Metodos de la clase Array:
es decir se pueden usar con Array.metodo, no son propiamente de un arreglo que ya tengamos creado.
from : crea una nueva instancia de array a partir de algo similar a un array (string,un arreglo)
isArray: dice si es un array bool
of: crea un arreglo con los elementos que le pasemos o con un tamaño predefinido
Metodos de instancia:
Son metodos que se hacen a partir de un arreglo ya creado
concat: metodo para juntar dos o mas arreglos o valores
copyWithin(posicion,x,y?) : modifica el arreglo tal que la posicion es el elemento a cambiar, x es la pocion del
elemento por el cualo lo vamos a cambiar y y seria en el caso tal de que no queremos cambiar solo el valor sino un rango de valores.
entries: crea una especie de objeto que tiene clave valor con cada una de las posiciones del arreglo. Para este solo podemos aceder a dicho objeto
a traves de un for o con la funcion next(). Diciendo que cuando queremos sacar la llave valor de cada elemento
son arreglos de dos posiciones 1-clave 2-valor.
every : es un metodo que le pasa los elementos a un callback el cual puede recibir (elemento,indice, arreglo) y 
dentro de ese callback tiene que ser una condicion que valide que todos los elementos la cumpla. devuelve un bool
fill: cambiar el valor de un arreglo o un rango de valores (numeroCambio,inicio,final).
filter : pasa un callback que devuelve un nuevo array con los elementos que cumplan la condicion. callback(elemento)
find : saca el elemento que primero cumpla la conducion dentro del callback que se pasa 
findIndex : parecido al find pero devuelve es la posicion
includes: Busca un valor dentro del arrays y devuelve un booleano. Se puede pasar un segundo parametro para decidir desde
que posicion empezar a buscar.
join: vuelve un arreglo sus elementos como string, y su le pasas un string va ser el que los separa
keys: crea un arreglo con los indices del arreglo
lastIndexOf: retorna el indice de un elemento buscado, que se encuentre en ultima posicion (si esta repetido el ultimo que se repite).
map : devuelve un nuevo arreglo el cual se le pasa un predicado que puede cambiar los elementos y ese cambio a cada elemento se tiene 
en cuenta para el nuevo arreglo.
reducer :de izquierda a derecha devuelve un unico valor el cual se cambia a traves de un predicado el cual tiene un acumulador,valorActual,indice,array.
reducerRight : lo mismo que el reducer pero de derecha a izquierda.
reverse: voltea el arreglo el ultimo elemento se vuelve el primero y el primero el ultimo 
some: pasa un predicado en el cual si hay un elemento que cumpla la condicion
sort: ordena los elementos del array
splice: cambia un elemento de un arreglo, donde el primer parametro es el indice, el segundo es cuantos elementos se van a cambiar a partir
del indice y lo ultimo es el cambio.
at: devuelve el elemento en esa posicion , si se pasan negativo es como si cogiera de los ultimos







*/






/*
Funciones usadas en el codigo de abajo 

slice
entries
every
includes
join
keys
map
reducer
some
sort
at
*/

function proveMethods (){
    const arreglo = [1,2,3,4,5]

    // crear copia de un arreglo con slice
    const arreglo2 = arreglo.slice();
    console.log("nuevo arreglo2 ", arreglo2)

    
    const entriesArreglo = arreglo.entries();
    // el for of se usa para iterar objetos iterables. El for in nos retorna la etiqueda o key del arreglo o objeto
    for (const key of entriesArreglo ){
        console.log("Primer valor de clave valor : ",key);
        
    }


    // comprobar si todos los elementos son divicibles por 3 
    const validation = arreglo2.every((e) => e%3 ===0);
    console.log("Los elementos del arreglo son divicibles por 3 : ", validation);

    // buscar un elemento en el arreglo

    console.log("Esta el numero 4 en el arreglo: ", arreglo.includes(4));
    
    // vuelve el arreglo un string 
    // si no le pasamos un separador por defecto pone comas
    console.log("El arreglo en forma de string es : ", arreglo2.join());

    //Devuelve los indicies del arreglo
    for (const iterator of arreglo.keys()) {
        console.log("Indices del arreglo: ",iterator);
        
    }

    
    // crea un nuevo arreglo en el que a cada elemento se le suma 1
    const arreglo3 = arreglo.map(e => e+1);
    console.log(arreglo3);


    //saca el promedio de todos los elementos del arreglo
    console.log("Promedio de numeros en el arreglo : ",arreglo3.reduce((almacenamiento,actual) => almacenamiento+actual)/arreglo3.length)


    // mira si esta el 20 en el arreglo
    console.log(arreglo3.some((e) => e ===20));

    //ordena los numeros de menor a mayor
    console.log(arreglo.sort())

    //devolver el penultimo elemento del arreglo
    console.log(arreglo.at(-2));
    




}

proveMethods();
