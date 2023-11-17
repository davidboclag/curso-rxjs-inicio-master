import { fromEvent, merge } from "rxjs";
import { map } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

// En caso de que varios observables emitieran un valor en el mismo tiempo, se ejecuta en el orden insertado
merge(
    keyup$.pipe(map(ev => ev.type)),
    click$.pipe(map(ev => ev.type))
).subscribe(console.log);