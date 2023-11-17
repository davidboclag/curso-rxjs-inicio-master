import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';

// Helper
const peticionHttpLogin = (userPass) =>
    ajax.post<{ token: string }>('https://reqres.in/api/login?delay=1', userPass).pipe(
        map(({response}) => response.token),
        catchError(err => of([]))
    );

// Creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones https://reqres.in/
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

submitBtn.innerText = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    // mergeMap(peticionHttpLogin) // Ejecuta todas las peticiones
    // switchMap(peticionHttpLogin) // Ignora todas las peticiones regresando solo la última
    exhaustMap(peticionHttpLogin) // Ignora las nuevas peticiones mientras esté ejecutando una
);

submitForm$.subscribe(token => console.log(token));