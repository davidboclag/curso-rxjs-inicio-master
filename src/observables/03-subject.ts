import { Observable, Observer, Subject, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});

/**
 * 1- Casteo múltiple (misma información para varias subscripciones)
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));