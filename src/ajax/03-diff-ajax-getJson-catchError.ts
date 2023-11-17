import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbinxx.org/delay/1';
// const url = 'https://api.github.com/users?_per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$.pipe(
//     catchError(manejaError)
// ).subscribe(data => console.log('getJson:', data));

// obs2$.pipe(
//     catchError(manejaError)
// ).subscribe(data => console.log('ajax:', data));


obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete')
});

// obs2$.subscribe(data => console.log('ajax:', data));