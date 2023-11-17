import { forkJoin, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'davidboclag';
const GITHUB_USER_FERNANDO = 'klerith';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos121`
    ).pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER_FERNANDO}/gists`
    ),
}).pipe(
    catchError(err => of(err))
).subscribe(console.log);