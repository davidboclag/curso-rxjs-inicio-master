import { asyncScheduler, observeOn, of, range } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);
// const src$ = range(1, 5, asyncScheduler); // Para convertirlo en asíncrono (deprecado)
const src$ = range(1, 5).pipe(observeOn(asyncScheduler)); // Para convertirlo en asíncrono
// const src$ = range(1, 5);
// const src$ = range(-5, 10);
// const src$ = range(5);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');