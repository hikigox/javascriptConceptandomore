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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function birthdayAsync(isBike) {
    return __awaiter(this, void 0, void 0, function* () {
        const gift = new Promise((resolve, reject) => {
            if (isBike) {
                resolve("Te regalaron una bicicleta !");
            }
            reject("Te regalaron otra cosa !");
        });
        try {
            console.log(yield gift, "dentro del try");
        }
        catch (error) {
            console.error(error, "en el catch");
        }
    });
}
birthdayAsync(true);
//# sourceMappingURL=example1_1.js.map