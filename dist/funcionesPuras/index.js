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
function pureSum(a, b) {
    return a + b;
}
/*
 *
 *Retornar un objeto nuevo y no mutado
 *
 *
 *
 */
const objeto = { nombre: 'Carlos', edad: '22' };
function newObject(objetoPass) {
    return Object.assign(Object.assign({}, objetoPass), { edad: '19' });
}
const objetoNuevo = newObject(objeto);
console.log(objetoNuevo);
console.log(objeto);
//# sourceMappingURL=index.js.map