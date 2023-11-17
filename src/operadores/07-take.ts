import { take, tap } from 'rxjs/operators';
import { of } from 'rxjs';


const numeros$ = of(1, 2, 3, 4, 5)
    .pipe(tap(console.log)); // Solo pintaría los 3 primeros números, ya que esto se ejecuta con la suscripción del subscribe de las siguientes líneas

numeros$.pipe(
    tap(t => console.log('tap', t)),
    take(3)
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });