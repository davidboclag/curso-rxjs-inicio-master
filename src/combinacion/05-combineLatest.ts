import { combineLatest, fromEvent } from "rxjs";
import { map } from 'rxjs/operators';

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// const click$ = fromEvent<PointerEvent>(document, 'click');

// Para que comience a emitir un valor, tiene que haber emitido todos los observables algún valor, y a raiz de esto, siempre emite el último valor de todos los observables en el orden situado.
// combineLatest(
//     [
//         keyup$.pipe(map(ev => ev.type)),
//         click$.pipe(map(ev => ev.type))
//     ]
// ).subscribe(console.log);


const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2, input3,input4);

// Helper
const getInputStream = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map<KeyboardEvent, string>(elem => (elem.target as HTMLInputElement).value)
    );

// Para que comience a emitir un valor, tiene que haber emitido todos los observables algún valor, y a raiz de esto, siempre emite el último valor de todos los observables en el orden situado.
combineLatest([
    getInputStream(input1),
    getInputStream(input2),
    getInputStream(input3),
    getInputStream(input4),
]).subscribe(console.log);