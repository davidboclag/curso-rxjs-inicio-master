import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, pluck } from "rxjs/operators";


const click$ = fromEvent<PointerEvent>(document, 'click');
click$.pipe(
    debounceTime(3000)
).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(
    debounceTime(1500),
    // pluck('target','value'),
    map(event => event?.target['value']),
    distinctUntilChanged(),
).subscribe(console.log);