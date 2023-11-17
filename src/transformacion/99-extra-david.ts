import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, mergeMap, switchMap, take } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
// const interval$ = interval(1000);
const interval$ = interval(1000).pipe(take(3));


click$.pipe(
    // mergeMap(() => interval$.pipe(take(3))) // Mientras se está emitiendo los observables, puede ir ejecutando nuevos que comiencen a emitir mergeando los resultados, es decir, puede ir obteniendo data de el observable 1 y del 3 posteriormente, luego del 2 y del 3 y así
    // switchMap(() => interval$.pipe(take(3))) // Si está ejecutándose un observable y se emite uno nuevo, el actual o anteriores se cancelan y comienza a emitirse el nuevo
    // concatMap(() => interval$.pipe(take(3))) // Hasta que no termine de completarse el observable actual no comienza a emitir el siguiente observable
    // exhaustMap(() => interval$.pipe(take(3))) // Si está ejecutándose un observable y se emite uno nuevo, se ignora el nuevo. Entonces hasta que no se esté emitiendo ningún observable no emitirá uno nuevo
    // mergeMap(() => interval$) // Mientras se está emitiendo los observables, puede ir ejecutando nuevos que comiencen a emitir mergeando los resultados, es decir, puede ir obteniendo data de el observable 1 y del 3 posteriormente, luego del 2 y del 3 y así
    // switchMap(() => interval$) // Si está ejecutándose un observable y se emite uno nuevo, el actual o anteriores se cancelan y comienza a emitirse el nuevo
    // concatMap(() => interval$) // Hasta que no termine de completarse el observable actual no comienza a emitir el siguiente observable
    exhaustMap(() => interval$) // Si está ejecutándose un observable y se emite uno nuevo, se ignora el nuevo. Entonces hasta que no se esté emitiendo ningún observable no emitirá uno nuevo
).subscribe(console.log)