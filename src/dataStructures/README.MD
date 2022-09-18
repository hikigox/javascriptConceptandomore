## Estructura de datos 

Las estructuras de datos son aquellos tipos o formas que pueden tener las variables o constantes. Donde tenemos principalmente dos tipos las estructuras de datos primitivas y las estructura de datos no primitivas


![diagrama](https://miro.medium.com/max/851/1*ZIGq3Xit78261gDW-3bheQ.png)


## Estructura de datos primitivas

Son las que pueden almacenar un solo tipo de dato.
### caracteristicas
- EL tamaño es conocido previamente y este no puede ser mayor y solo se puede almacenar un dato de ese tipo.

- Siempre almacena un dato y no puede contener un null.



## Estructura de dato no primitiva 
Se puede almacenar valores de mas de un tipo de dato y posiblemente tiene metodos para acceder a esos valores.

### Estructura de dato lineal
Son un tipo de dato no primitivo el cual si datos sigue un patron lineal. Aunque esto tiene sentido si lo pensamos de manera matematica.

Digamos a que algo igual de matematico pero mas entendible es el rendimiento. Ya que estos datos lineales sus accesos son linealmente en su forma O(n) en su mayoria de caso.


### Arrays / Arreglos

Los arreglos son una forma de almacenar un tipo de dato o diferentes (dependiendo de la declaracion). Ver ejemplo

#### Arreglos en Javascript

Los arreglos en este lenguaje son dinamicos y por paso por referencia. ver ejemplo 1 .

Metodos disponibles:

Estas son algunos metodos, los menos conocidos o que pocas veces se usan en algunos casos.

* pop: Elimina y retorna el ultimo elemento de un arreglo
* unshift : Añade un elemento al inicio del arreglo
* shift: elimina el primer elemento de un arreglo
* indexOf: busca en el arreglo el elemento a buscar y retorna la posicion, si no esta retorna -1.
* slice: Eliminar un elementos de una lista segun un rango slice(pos,n). Donde pos es la pocion donde se va
a empezar a eliminar y n son los elementos desde esa posicion que se eleminan. Tambien podemos hacer copia de un arreglo.

##### Metodos de la clase Array:
es decir se pueden usar con Array.metodo, no son propiamente de un arreglo que ya tengamos creado.


* from : crea una nueva instancia de array a partir de algo similar a un array (string,un arreglo)
* isArray: dice si es un array bool
* of: crea un arreglo con los elementos que le pasemos o con un tamaño predefinido
##### Metodos de instancia:

Son metodos que se hacen a partir de un arreglo ya creado

* concat: metodo para juntar dos o mas arreglos o valores
copyWithin(posicion,x,y?) : modifica el arreglo tal que la posicion es el elemento a cambiar, x es la pocion del
elemento por el cualo lo vamos a cambiar y y seria en el caso tal de que no queremos cambiar solo el valor sino un rango de valores.
* entries: crea una especie de objeto que tiene clave valor con cada una de las posiciones del arreglo. Para este solo podemos aceder a dicho objeto
a traves de un for o con la funcion next(). Diciendo que cuando queremos sacar la llave valor de cada elemento
son arreglos de dos posiciones 1-clave 2-valor.
* every : es un metodo que le pasa los elementos a un callback el cual puede recibir (elemento,indice, arreglo) y 
dentro de ese callback tiene que ser una condicion que valide que todos los elementos la cumpla. devuelve un bool
* fill: cambiar el valor de un arreglo o un rango de valores (numeroCambio,inicio,final).
* filter : pasa un callback que devuelve un nuevo array con los elementos que cumplan la condicion. callback(elemento)
* find : saca el elemento que primero cumpla la conducion dentro del callback que se pasa 
* findIndex : parecido al find pero devuelve es la posicion
* includes: Busca un valor dentro del arrays y devuelve un booleano. Se puede pasar un segundo parametro para decidir desde
que posicion empezar a buscar.
* join: vuelve un arreglo sus elementos como string, y su le pasas un string va ser el que los separa
* keys: crea un arreglo con los indices del arreglo
* lastIndexOf: retorna el indice de un elemento buscado, que se encuentre en ultima posicion (si esta repetido el ultimo que se repite).
* map : devuelve un nuevo arreglo el cual se le pasa un predicado que puede cambiar los elementos y ese cambio a cada elemento se tiene 
en cuenta para el nuevo arreglo.
* reducer :de izquierda a derecha devuelve un unico valor el cual se cambia a traves de un predicado el cual tiene un acumulador,valorActual,indice,array.
* reducerRight : lo mismo que el reducer pero de derecha a izquierda.
* reverse: voltea el arreglo el ultimo elemento se vuelve el primero y el primero el ultimo 
* some: pasa un predicado en el cual si hay un elemento que cumpla la condicion
* sort: ordena los elementos del array
* splice: cambia un elemento de un arreglo, donde el primer parametro es el indice, el segundo es cuantos elementos se van a cambiar a partir
del indice y lo ultimo es el cambio.
* at: devuelve el elemento en esa posicion , si se pasan negativo es como si cogiera de los ultimos



