import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (val) => console.log('next', val)
};

// src1$.subscribe(ev => {
//     console.log(ev.x);
//     console.log(ev.y);
// });

// Ecmascript 6 (al ser un evento tipado, podemos indicar entre parentesis y llaves las propiedades del evento/objeto que necesito)
src1$.subscribe(({ x, y, pointerType }) => {
    console.log(x, y, pointerType);
});

src2$.subscribe(evento => {
    console.log(evento.key);
});