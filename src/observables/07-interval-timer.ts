import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); // Le sumamos 5 segundos a la fecha actual

const intervale$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); // Esto es como crear un intervale, pero indicandole que se demore 2 segudnos para emepezar
// const timer$ = timer(0);
const timer$ = timer(hoyEn5); // Ejecutamos el timer tras 5 segundos con respecto a la fecha actual

console.log('Inicio');
// intervale$.subscribe( observer );
timer$.subscribe(observer);
console.log('Fin');