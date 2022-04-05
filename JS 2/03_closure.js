//                                         // Замыкания
// function createCalcFunction(n) {
//     return function() {
//         console.log(1000*n)
//     }
// }                                         
// const calc = createCalcFunction(42)
// calc() // Не может обратиться к n, т.е. получилось что-то вроде приватной переменной

// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)     // Замкнула в себе единицу
// const addTen = createIncrementor(10)    // Замкнула в себе 10 
// console.log(addOne(41))
// console.log(addTen(41))

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('netflix'))

// console.log(ruUrl('yandex'))
// console.log(ruUrl('vk'))



/// ======================= Практика ========================

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {name: 'Steve', age: 28, job: 'Barista'}
const person2 = {name: 'Elena', age: 23, job: 'Frontend'}

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}


