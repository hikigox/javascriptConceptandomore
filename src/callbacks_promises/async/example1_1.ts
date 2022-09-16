/**
 * 
 * Async - await functions
 * 
 * Se usara el ejemplo que venimos utilizando con promesas.
 * Sencillamente es azucar sintactico de las promesas.
 * 
 * 
 *  
 * 
 */

 async function  birthdayAsync( isBike: boolean ){

     
     const gift = new Promise((resolve: any, reject:any) => {
         if (isBike) {
             resolve("Te regalaron una bicicleta !");
         }
         reject("Te regalaron otra cosa !");
     })
     try {

    console.log(await gift, "dentro del try");
        


    } catch (error) {
        console.error(error,"en el catch");
        
    }
     
}


birthdayAsync(true);