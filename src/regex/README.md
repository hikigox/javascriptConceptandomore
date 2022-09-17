# Expreciones Regulares

Las expreciones regulares son un concepto el cual lo que busca es buscar patrones dentro de una cadena de caracteres de acuerdo a un patron que nosotros le demos. Este como tal se puede ver como un "Automata finito". El cual si se cumplen ciertas caracteristicas este busca lo que le pedimos.

## Aserciones, Cuantificadores, especificaciones, clases de caracteres, Grupos y rango.

Son los simbolos que utilizamos para definir X caracteristica de un patron ya sea desde el comienzo o el final.
Dentro de este tenemos los siguientes

|Tipo| Simbolo | Donde se usa | descripcion |
|---------|---------|--------------|-------------|
|Aserciones| ^ | inicio | Dice que la letra que sigue luego de el sea la primera letra que tengamos que colocar |
|Aserciones|$|final | Dice que la letra a la izquierda de el debe ser la ultima letra que tenga el patron|
|Aserciones|\b|final| Evalua donde esta el patron completo dentro de la cadena de texto|
|Cuantificador|*| despues de una letra| nos permite decir que la letra a su izquierda puede estar una vez o muchas veces.Pero tambien decir que no esta|
|Cuantificador|+| despues de una letra| nos permite decir que la letra a su izquierda puede estar una vez o muchas veces. Pero si no esta no cumple el patron|
|Cuantificador|?| despues de una letra | nos permite decir que la letra puede venir una vez o no viene|
|Cuantificador| {min,max}| despues de una letra| nos dice que la letra tiene que venir min minimo de veces y que puede venir max maximo numero de veces|
|comodin| . | en medio de dos letras o caracteres (normalmente) |nos dice que dentro de esas dos letras puede venir cualquier cosa|
|comodin| \\. | exista un . en algun lugar de la cadena de caracteres |nos dice que dentro de esas dos letras puede venir cualquier cosa|
|especificacion (javascript)|g|final del patron | que evalue globalmente el patron|
|clases de caracteres| \d | despues de un numero| nos dice que lo que tenga como letra tiene que ser un numero|
|clases de caracteres| \d | despues de un letra| nos dice que lo que tenga como letra tiene que ser una letra pero no un numero|
|clases de caracteres| \w | despues de un numero| nos dice si existe cualquier cadena alfanumerica |
|clases de caracteres| \s | despues de una letra| nos dice que tiene que existir un espacio despues de la letra|
|Grupos y rangos| \|| entre dos palabras o letras| nos permite decir si es una palabra, letra o patron o otro.|
|Grupo y rangos| [x-y] |despues de una letra| nos permite decir que la letra que tiene a la izquierda tiene que ser una de las que este en el rango (letra,numero,simbolo?), teniendo en cuenta si es mayuscula o no |
|Asersion Anticipada| (x) | despues de una letra| valida si despues de una X asesion condicional|
|Asersion condicional| =? | dentro de una asersion anticipada (talvez de otra manera)| nos perimte decir que luego de la palabra exista un patron despues|
|Asersion condicional | ?! | dentro de una asersion anticipada (talvez de otra manera)| Nos dice que despues de la palabra no puede existir el patron que le sigue
|especificacion| u| al final del patron| Nos permite evaluar emoticones |
|comodin| \\ | antes del caracter especial| Busca el caracter espcial si este hace parte de los posibles simbolos de regex
