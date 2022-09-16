/**
 * 
 * Promesas 
 * 
 * 
 * Vamos a hacer el ejemplo del texto
 * a ti tu madre te dijo que te iba a regalar una bicicleta. Pero no sabemos si verdaderamente te la va a regalar o no
 * miremos como es esto con promesa.
 * 
 * 
 * NOTA:
 * una promesa aunque es otra menera de manejar syncronia sigue el mismo modelo del callback y es que este
 * aunque solo recibe como argumento una funcion este sigue significando lo mismo.
 * 
 * 
 */
const isBike = false;

const birthday = new Promise ((resolve:any, reject:any) => {
    if (isBike) {
        resolve("Te han regalado una bicicleta !")

    }
        reject("No te regalaron una bicicleta !")



})

birthday.then((resolve:any) => console.log(resolve))
.catch((reject:any) => console.log(reject));


