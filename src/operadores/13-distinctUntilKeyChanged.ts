import { from } from "rxjs";
import { distinctUntilKeyChanged, map } from "rxjs/operators";

interface Personaje {
    nombre: string;
    edad: number;
    otros: {
        a: string;
        b: string;
    }
}

const personajes: Personaje[] = [
    {
        nombre: "Megaman",
        edad: 10,
        otros: {
            a: 'a',
            b: 'b'
        }
    },
    {
        nombre: "Megaman",
        edad: 11,
        otros: {
            a: '1',
            b: 'b'
        }
    },
    {
        nombre: "Megaman",
        edad: 12,
        otros: {
            a: '1',
            b: 'b'
        }
    },
    {
        nombre: "Megaman",
        edad: 10,
        otros: {
            a: '1',
            b: 'b'
        }
    },
    {
        nombre: "Megaman",
        edad: 10,
        otros: {
            a: '3',
            b: 'b'
        }
    },
    {
        nombre: "Megaman",
        edad: 10,
        otros: {
            a: '3',
            b: 'b'
        }
    },
    {
        nombre: "X",
        edad: 10,
        otros: {
            a: '3',
            b: 'b'
        }
    },
    {
        nombre: "Zero",
        edad: 10,
        otros: {
            a: 'a',
            b: 'b'
        }
    },
    {
        nombre: "Dr. Willy",
        edad: 10,
        otros: {
            a: 'a',
            b: 'b'
        }
    },
    {
        nombre: "X",
        edad: 15,
        otros: {
            a: 'a',
            b: 'b'
        }
    },
    {
        nombre: "X",
        edad: 15,
        otros: {
            a: 'a',
            b: 'b'
        }
    },
    {
        nombre: "Megaman",
        edad: 15,
        otros: {
            a: 'a',
            b: 'b'
        }
    },
    {
        nombre: "Zero",
        edad: 10,
        otros: {
            a: 'a',
            b: 'b'
        }
    }
];

from(personajes).pipe(
    // map(personaje => personaje.otros),
    // distinctUntilKeyChanged('a')
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);

