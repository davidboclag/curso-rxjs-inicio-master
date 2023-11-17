import { fromEvent, interval } from "rxjs";
import { concatMap, mergeMap, switchMap, take } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
    // mergeMap(() => interval$) // Mientras se está emitiendo los observables, puede y ejecutando nuevos que comiencen a emitir mergeando los resultados, es decir, puede ir obteniendo data de el observable 1 y del 3 posteriormente, luego del 2 y del 3 y así
    // switchMap(() => interval$) // Si está ejecutándose un observable y se emite uno nuevo, el actual o anteriores se cancelan y comienza a emitirse el nuevo
    concatMap(() => interval$) // Hasta que no termine de completarse el observable actual no comienza a emitir el siguiente observable
).subscribe(console.log)