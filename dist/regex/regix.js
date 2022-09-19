/****
 *
 * Ejemplo de usar expresiones regulares
 * Estos son algunos ejemplos de como usar las expreciones regulares
 *
 *
 */
/**
 *
 * Validacion de email
 *
 * Validemos un email a traves de expreciones regulares
 *
 */
function validationEmail(email) {
    const validador = /[a-zA-Z1-9_]+@[a-z]\./;
    console.log(validador.test(email));
}
// validationEmail("jorge@g.com");
/**
 * Utilizando el match de regex para buscar palabras que contengan el formato
 * para esto vamos a suponer un xml y tratar de encontrar el patron
 *
 *
 *
 */
function matchXML(xml, tag) {
    const matches = `${tag[0]}.+?${tag[1]}`;
    const regex = new RegExp(matches, 'g');
    console.log(xml.match(regex));
}
// matchXML("<hola> soy yo </hola><hola></hola>", ['<hola>','</hola>'])
/***
 * Funcion para remplazar texto con regex
 *
 *
 *
 *
 *
 */
function replaceStringTag(word, tags) {
    const tagsReg = typeof tags === 'string' ? `(=?${tags})` : tags.map(e => `(=?${e})`).join("|");
    console.log(word.replace(new RegExp(tagsReg, 'g'), ''));
}
// replaceStringTag("<hola> soy yo </hola><hola> soy yo </hola>", ['<hola>','</hola>'])
/*
 *
 * Validacion de contraseña
 * contraseña que contenga:
 * minimo 1 mayuscula
 * minimo 1 symbolo (@ł€¶ŧ←↓→øþæßðđŋħł~«»¢“”nµ─·̣¬)
 * minimo 1 minuscula
 * minimo 1 numero
 * tamaño 6
 *
 *
 */
function password(password) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@ł€¶ŧ←↓→øþæßðđŋħł~«»¢“”nµ─·̣¬])(.{6,})$/;
    console.log(reg.test(password));
}
password("qaqAA12@");
//# sourceMappingURL=regix.js.map