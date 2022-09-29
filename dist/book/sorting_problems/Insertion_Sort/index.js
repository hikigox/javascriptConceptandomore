/**
 * Insertion Sort
 *
 *
 */
// Implementacion Propia
function insertionSortCreciente(arreglo) {
    for (let i = 1; i < arreglo.length; i++) {
        let j = i - 1;
        const value = arreglo[i];
        while (j >= 0 && j < arreglo.length) {
            const value1 = arreglo[j];
            if (value < value1) {
                arreglo[j + 1] = value1;
                arreglo[j] = value;
            }
            j--;
        }
    }
    return arreglo;
}
function insertionSortDecreciente(arreglo) {
    for (let i = 1; i < arreglo.length; i++) {
        let j = i - 1;
        const value = arreglo[i];
        while (j >= 0 && j < arreglo.length) {
            const value1 = arreglo[j];
            if (value > value1) {
                arreglo[j + 1] = value1;
                arreglo[j] = value;
            }
            j--;
        }
    }
    return arreglo;
}
// Implementacion Libro
function insertionSortBookCreciente(arreglo) {
    for (let j = 1; j < arreglo.length; j++) {
        const key = arreglo[j];
        let i = j - 1;
        while (i >= 0 && arreglo[i] > key) {
            arreglo[i + 1] = arreglo[i];
            arreglo[i] = key;
            i = i - 1;
        }
    }
    return arreglo;
}
function insertionSortBookDecreciente(arreglo) {
    for (let j = 1; j < arreglo.length; j++) {
        const key = arreglo[j];
        let i = j - 1;
        while (i >= 0 && arreglo[i] < key) {
            arreglo[i + 1] = arreglo[i];
            arreglo[i] = key;
            i = i - 1;
        }
    }
    return arreglo;
}
let arreglo = [31, 41, 59, 26, 41, 58];
console.log(insertionSortBookDecreciente(arreglo));
//# sourceMappingURL=index.js.map