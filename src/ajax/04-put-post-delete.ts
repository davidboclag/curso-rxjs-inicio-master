import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.get(url, {
//     'mi-token': 'ABC123'
// }).subscribe(res => console.log('get', res));

// ajax.post(url, {
//     id: 1,
//     nombre: 'David'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(res => console.log('post', res));

// ajax.put(url, {
//     id: 1,
//     nombre: 'David'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(res => console.log('put', res));

// ajax.delete(url, {
//     'mi-token': 'ABC123'
// }).subscribe(res => console.log('delete', res));

ajax({
    url, // esto equivale a url: url, ya que si la key es igual a la variable, no hace falta indicarlo
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'David'
    }
}).subscribe(console.log)