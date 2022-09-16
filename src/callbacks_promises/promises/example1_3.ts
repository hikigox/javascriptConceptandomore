/**
 * 
 * Promesas 
 * 
 * 
 * Lo siguiente es mirar como podemos encadenar una promesa con otra o con un callback o funcion
 * lo que hicimos es que en el primer den, es decir en nuestra primera promesa lo que hacemos es que podemos jugar
 * o hacer algo con dicho valor que pasamos y retornarlo a otro callback o then y que este lo reciba como argumento
 * y nosotros usarlo.
 * 
 * 
 */
 const isBike2 = true;

 const birthday3 = new Promise ((resolve:any, reject:any) => {
     if (isBike2) {
         resolve("Te han regalado una bicicleta !")
 
     }
         reject("No te regalaron una bicicleta !")
 
 
 
 })
 
 birthday3.then((resolve:any) => "te regalaron una bici")
 .then(e => console.log("Te han regalado : " + e  +"\nPero yo soy la segunda promesa !")
 )
 .catch((reject:any) => console.log(reject));
 
 