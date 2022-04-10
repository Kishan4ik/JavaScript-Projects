//Генераторы
//Генератор порционно выдает некоторый результат функции
// function* strGenerator() {
//     yield 'H' // Только у генераторов появляется специальный метод "yield"
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//     for(let i = 0; i < n; i++) {
//         yield i
//     }
// }

// const number = numberGen(7)

// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0
//         return {
//             next() {
//                 if( i < n) {
//                     return {value: ++i, done:false}
//                 }
//                 return {value: undefined, done:true}
//             }
//         }
//     }
// } //Реализовали итерацию по объекту, добавив в него метод [Symbol.iterator]

function* iter(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i
    }
}

for(let k of iter(6)) {
    console.log(k)
}