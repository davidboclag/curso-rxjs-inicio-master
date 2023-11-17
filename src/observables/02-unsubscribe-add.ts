import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    // Crear un contador, 1,2,3,4,5,6...
    let count: number = 0;
    const interval = setInterval(() => {
        // Cada segundo
        subscriber.next(count++);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return (() => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    })
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
subs2.add(subs3)

// const allSubs = new Subscription()
// allSubs.add(subs1);
// allSubs.add(subs2);
// allSubs.add(subs3)

setTimeout(() => {
    // allSubs.unsubscribe();
    subs1.unsubscribe();
    // subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado timeout')
}, 6000);