import { Observable, from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
    .subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
    .subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'David', autenticado: false, token: null },
    { id: 'David', autenticado: true, token: 'ABC' },
    { id: 'David', autenticado: true, token: 'ABC123' }
];

const state$: Observable<Usuario> = from(user).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur };
    }, { id: 'Pepe' })
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);