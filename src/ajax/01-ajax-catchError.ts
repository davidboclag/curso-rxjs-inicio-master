import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?_per_page=5';

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(res => res.json())
//     .then(data => console.log('data', data))
// .catch(err => console.warn('error en usuarios', err))

// fetchPromesa
//     .then(manejaErrores)
//     .then(res => res.json())
//     .then(data => console.log('data', data))
//     .catch(err => console.warn('error en usuarios', err))

ajax(url).pipe(
    // pluck('response'), // deprecado
    map(res => res.response),
    catchError(atrapaError)
).subscribe(users => console.log('usuarios:', users));