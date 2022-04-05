                                        //1 Функции
//function declaration
// function greet(name) {
//     console.log('Hello, ' + name)
// }                     

//function expression
// const greet2 = function(name) {
    // console.log('Ola, ' + name + '!')
// }
// Отличие в том, что мы можем вызывать function declaration в любой момент времени (даже до инициализации)
// Если же мы сначала вызываем функцию, а function expression делаем ниже в коде, то компилятор выдаст ошибку
// При этом у function expression есть свои плюсы, о них будет ниже


// greet2('Lena')
// greet('Artem')

// console.log(typeof greet) // Выдает Function, но такого типа данных нет. На самом деле это объект
//console.dir(greet) // Открывает реализацию функции в консоли, где видно, что это объект

                                        // 2 Анонимные функции 

// let counter = 0

// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 500)

                                        // 3 Стрелочные функции

// function greet(name) {
//     console.log('Hello, ' + name)
// }

// const arrow = (name) => {
//     console.log('Hello, ' + name)
// }

// const arrow2 = name => console.log('Hello, ' + name)

// // arrow2('Artem')

// const pow2 = num => {
//     return num**2
// }
// const pow3 = num => num**2

// console.log(pow3(15) 

                                        // 4 Параметры по умолчанию

// const sum = (a = 0, b = 0) => a + b
// console.log(sum()) 

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)

                                        // 5 Замыкания

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + ' ' + lastName)
//     } 
// }

// const logWithLastName = createMember('Artem')
// console.log(logWithLastName('Shilov'))


                                    