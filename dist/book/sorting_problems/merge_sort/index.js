/**
 *
 * Merge
 *
 * A : Arreglo
 * p<=q<r
 *
 * n = tamaño del arreglo
 * p= primer elemento inicial del arreglo
 * q = n/2
 * r = n
 */
function merge(A, p, q, r) {
    // tamaño del primer arreglo L (left)
    const n1 = q - p + 1;
    const n2 = r - q;
    /**  como javascript es una verga y es dinamico con sus arreglos los definimos de esta manera
        En un lenguaje con arreglos estaticos declarariamos estos de la siguiente manera
        L = [1..n1+1]
        R = [1..n2+1]
        el +1 es porque vamos a añadirle un sentinela,esto hasta donde comprendi es para o cumplir la
        invariante o sencillamente para manejar casos imapares
    */
    const L = [];
    const R = [];
    for (let i = 1; i <= n1; i++) {
        L.push(A[(p - 1) + i - 1]);
    }
    for (let j = 1; j <= n2; j++) {
        R.push(A[(q - 1) + j]);
    }
    let i = 0;
    let j = 0;
    // esto seria en la posicion n1 + 1 y n2 + 1
    L.push(Infinity);
    R.push(Infinity);
    for (let k = p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k - 1] = L[i];
            i += 1;
        }
        else {
            A[k - 1] = R[j];
            j += 1;
        }
    }
    return A;
}
function merge2(A, p, q, r) {
    // tamaño del primer arreglo L (left)
    const n1 = q - p;
    const n2 = r - q;
    /**  como javascript es una verga y es dinamico con sus arreglos los definimos de esta manera
        En un lenguaje con arreglos estaticos declarariamos estos de la siguiente manera
        L = [1..n1+1]
        R = [1..n2+1]
        el +1 es porque vamos a añadirle un sentinela,esto hasta donde comprendi es para o cumplir la
        invariante o sencillamente para manejar casos imapares
    */
    const L = [];
    const R = [];
    for (let i = 0; i < n1; i++) {
        L.push(A[p + i]);
    }
    for (let j = 0; j < n2; j++) {
        R.push(A[q + j]);
    }
    let i = 0;
    let j = 0;
    // esto seria en la posicion n1 + 1 y n2 + 1
    L.push(Infinity);
    R.push(Infinity);
    for (let k = p; k < r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i += 1;
        }
        else {
            A[k] = R[j];
            j += 1;
        }
    }
    return A;
}
/*
 *
 *
 * Merge-Sort
 *
 * A : Arreglo
 * p: primer elemento del arreglo
 * r: tamaño del arreglo
 *
 */
function mergeSort(A, p, r) {
    if (p < r) {
        const q = ~~((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}
function mergeSort1(A, p, r) {
    if (p < r) {
        const q = ~~((p + r) / 2);
        mergeSort1(A, p, q);
        mergeSort1(A, q, r);
        merge2(A, p, q, r);
    }
}
let A = [5, 2, 1, 7, 1, 0, 2, 5, 9, 5, 2, 1, 7, 1, 0, 2, 5, 9, 5, 2, 1, 7, 1, 0, 2, 5, 9, 5, 2, 1, 7, 1, 0, 2, 5, 9, 5, 2, 1, 7, 1, 0, 2, 5, 9];
// mergeSort(A,1,A.length);
mergeSort1(A, 0, A.length);
console.log(A);
//# sourceMappingURL=index.js.map