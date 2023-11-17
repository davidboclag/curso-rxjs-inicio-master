import { map, takeWhile } from 'rxjs/operators';
import { fromEvent } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    // El true de takeWhile hace que devuelva la condición que terminó de completar el subscribe (por defecto es false)
    takeWhile(({ y }) => y <= 150, true)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});