import { Observable, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { GitHubUsersResp } from '../interfaces/github-users.interface';
import { GitHubUser } from '../interfaces/github-user.interfaces';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GitHubUser[]) => {
    console.log(usuarios);
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

// Stream
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map(({ target }) => (target as HTMLInputElement).value),
    mergeMap<string, Observable<GitHubUsersResp>>(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    map<GitHubUsersResp, GitHubUser[]>(data => data['items'])
)//.subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg='; // + david
input$.pipe(
    map(({ target }) => (target as HTMLInputElement).value),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)