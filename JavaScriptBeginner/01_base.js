                        // 1 Переменные
        //variables
//  var name = 'Artem' //too old - better to avoid
 //const age = 20 // 
//  const isProgrammer = true
//age = 'some string'

// const firstName = 'Artem' //camelCase style of making variables' names
//It's not necessary to write ";"

// const _private = 'private'
// const _ = 'some value'
// const if = 'mgls' - causes error 
// const with5 = 'val'
// const 5with = 'dls' - error

                        // 2 Мультирование
//console.log('Имя пользователя: ' + firstName +  ', а возраст - ' + age) //concatenate
//alert('Имя пользователя: ' + firstName +  ', а возраст - ' + age) //concatenate

//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

                        // 3 Операторы

// let currentYear = 2022
// const birthYear = 2002
//const age = currentYear - birthYear
//console.log(age)


// const a = 10
// const b = 5

// let c = 32
// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(b / a)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

                        // 4 Типы данных 

// const isProgrammer = true
// const name = 'artem'
// const age = 20
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof null)

                        // 5 Приоритет оператора
// const fullAge = 20
// const birthYear = 2002
// const currentYear = 2022

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

                        // 6 Условные операторы

// const courseStatus = 'pending' //ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else { 
//     console.log('Курс не получился')
// }

//const isReady = true
// if(isReady) {    // can be written shortly
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }
//isReady ? console.log('Все готово!') : console.log('Все не готово!') // Тернарное выражение

// const num1 = 42 //number
// const num2 = '42' //srting

// console.log(num1 == num2) //Says 'Equal' 
// Оператор '==' сначала приводит значения к одному типу, а затем сравнивает их

                        // 7 Булевая логика

// Логическое И "&&", Логическое ИЛИ "||"
// Далее работают обычные правила булевой алгебры
 
                        // 8 Функции

// function calcAge(year) {
//     return 2022 - year
// }                

// function logInfoAbout (name, year) {
//     const age = calcAge(year)
//     console.log('A person named ' + name + ' now is ' + age + ' years old.')
// }

                        // 9 Массивы

//const cars = ['Mazda', 'Mercedes-Benz', 'BMW']
//const cars = new Array('Mazda', 'Mercedes-Benz', 'BMW') // too complicated
// console.log(cars.length)
//cars[0] = 'Porsche'
//cars[3] = 'Rolls-Royce'
//console.log(cars)

                        // 10 Циклы

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }                    
// console.log('------------')

// for (let car of cars) {
//     console.log(car)
// }

                        // 11 Объекты

// const person =  {
//     firstName: 'Artem',
//     lastName: 'Shilov',
//     year: 2002,
//     languages: ['Ru', 'En', 'C++'],
//     isProgrammer: true,
//     greet: function() {
//         console.log('greet from person ' +  this.firstName)
//     }
// }                        

// console.log(person.firstName)
// const key = 'year'
// console.log(person[key])
// person.greet()