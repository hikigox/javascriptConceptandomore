

/**
 * 
 * Promesa Ejemplo 2
 * 
 * 
 * En este ejemplo vamos hacer el mismo que el de 1.1. Pero vamos a ver como pasarle por parametro si le daran o no 
 * la bicicleta
 * 
 */


function birthday2( isBike: boolean ){


    const gift = new Promise((resolve: any, reject:any) => {
        if (isBike) {
            resolve("Te regalaron una bicicleta !");
        }
        reject("Te regalaron otra cosa !");
    })

    gift.then((e:any) => console.log(e))
    .catch((e:any) => console.log(e)
     );
     
}



birthday2(false);
console.log("a");


