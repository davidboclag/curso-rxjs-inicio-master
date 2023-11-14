import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia de valores
 * from = array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

// El asterisco indica que es una función generadora y con yield emite valores secuencialmente
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();
// for(let id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]); // Con esto obtenemos el mismo resultado que la linea anterior. Sin los 3 puntos se haría todo de una vez
// const source$ = from('David');
// const source$ = of(...'David'); // Con esto obtenemos el mismo resultado que la linea anterior. Sin los 3 puntos se haría todo de una vez
const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async (res) => {
//     console.log(res);
//     const dataResp = await res.json();
//     console.log(dataResp);
// });

// source$.subscribe(observer);