import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre= 'David';


    subs.complete();

    // Esto no se ejecuta, ya que ejecutóel complete().
    subs.next('Hola');
    subs.next('Mundo');
});

// obs$.subscribe(res => console.log(res));
// A partir de typescript 6, se puede realizar la siguiente manera
// obs$.subscribe(console.log);

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// )