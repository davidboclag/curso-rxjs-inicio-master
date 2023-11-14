import { asyncScheduler } from 'rxjs';

// Con asyncScheduler pordemos realizar como si utilizaramos setTimeout o setInterval, pero con rxjs
// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = ({ nombre, apellido, edad }) => console.log(`Hola ${nombre} ${apellido} ${edad}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, { nombre: 'David', apellido: 'Bocanegra', edad: 29 });

// Esto es lo mismo que lo que hicimos anteriormente, pero con la function ya agregada.
asyncScheduler.schedule(function (state) {
    console.log(`Hola ${state.nombre} ${state.apellido} ${state.edad}`);
}, 3000, { nombre: 'David', apellido: 'Bocanegra', edad: 29 });

const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);