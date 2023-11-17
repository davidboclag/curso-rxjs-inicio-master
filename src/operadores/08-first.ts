import { first, map, take, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    // take(1) // Esto es lo mismo que first, pero con más código
    tap<PointerEvent>(console.log),
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first(event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});