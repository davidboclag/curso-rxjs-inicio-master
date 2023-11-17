import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";


const numeros$ = of(1, '1', 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');
numeros$.pipe(
    distinctUntilChanged() // ===
).subscribe(console.log);

interface Personaje {
    nombre: string;
    edad: number;
}

const personajes: Personaje[] = [
    {
        nombre: "Megaman",
        edad: 10
    },
    {
        nombre: "Megaman",
        edad: 11
    },
    {
        nombre: "Megaman",
        edad: 12
    },
    {
        nombre: "Megaman",
        edad: 10
    },
    {
        nombre: "Megaman",
        edad: 10
    },
    {
        nombre: "Megaman",
        edad: 10
    },
    {
        nombre: "X",
        edad: 10
    },
    {
        nombre: "Zero",
        edad: 10
    },
    {
        nombre: "Dr. Willy",
        edad: 10
    },
    {
        nombre: "X",
        edad: 15
    },
    {
        nombre: "X",
        edad: 15
    },
    {
        nombre: "Megaman",
        edad: 15
    },
    {
        nombre: "Zero",
        edad: 10
    }
];

from(personajes).pipe(
    // distinctUntilChanged((prevP: Personaje, curP: Personaje) => prevP.nombre === curP.nombre)
    distinctUntilChanged((prevP: Personaje, curP: Personaje) => JSON.stringify(prevP) === JSON.stringify(curP))
).subscribe(console.log);

