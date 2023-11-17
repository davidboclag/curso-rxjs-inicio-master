import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, map, pluck } from "rxjs/operators";


const click$ = fromEvent<PointerEvent>(document, 'click');
click$.pipe(
    throttleTime(3000)
)//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false, // obtener el primer valor (por defecto true)
        trailing: true // obtener el último valor (por defecto false)
    }),
    // pluck('target','value'),
    map(event => event?.target['value']),
    distinctUntilChanged(),
).subscribe(console.log);