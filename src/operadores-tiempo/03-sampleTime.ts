// sampleTime -> Emite el último valor en el tiempo indicado

import { fromEvent } from "rxjs";
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y })),
    // sampleTime(2000) En este punto sería más ineficiente
).subscribe(console.log);