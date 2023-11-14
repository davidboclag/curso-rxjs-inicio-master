import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5).pipe(map<number, number>(val => val * 10)).subscribe(console.log);
// range(1, 5).pipe(map<number, string>(val => (val * 10).toString())).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// keyup$.subscribe(val => console.log('map', val.code));

const keyupCode$ = keyup$.pipe(map(event => event.code));
const keyupBaseURI$ = keyup$.pipe(map(event => event?.target['baseURI']));
// const keyupPluck$ = keyup$.pipe(pluck('key')); // Deprecado, usar .map
const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI')); // -> .map(event => event?.target?.baseURI)
const keyupMapTo$ = keyup$.pipe(mapTo('tecla presionada')); // Deprecado, ahora se hace conm ap (la siguiente línea)
// const keyupMapTo$ = keyup$.pipe(map(() => 'tecla presionada'));

keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupBaseURI$.subscribe(baseUri => console.log('map', baseUri));
keyupMapTo$.subscribe(value => console.log('mapTo', value));

// La siguiente linea es lo mismo que lo anterior, pero en una sola linea.
// keyup$.pipe(map(event => event.code)).subscribe(code => console.log('map', code));

