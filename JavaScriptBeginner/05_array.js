                                        // Массивы

const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const trash = ['23', 13, 'adf', 143n]
const people = [
    {name: 'Masha', budget: 4200},
    {name: 'Kolya', budget: 1700},
    {name: 'Vika', budget: 5000} 
]

// cars.push('Porsche')
// cars.unshift('Lada')
// const firstItem = cars.shift()
// const lastItem = cars.pop()
// console.log(lastItem)
// console.log(firstItem)
// console.log(cars)
// console.log(cars.reverse())
// cars[index] = 'Porsche'
// console.log(cars)

// const index = people.findIndex(function(person) {
//     return person.budget === 5000
// })
// console.log(people[index])

// const person = people.find(function(person) { // Same function, but with 'Find'
//     return person.budget === 5000
// })
// console.log(person)

// let foundPerson
// for(const person of people) {   // Хуже, потому что сложно и долго
//     console.log(person)
//     if(person.budget === 2000) {
//         foundPerson = person
//     }
// }
// console.log(foundPerson)

//Можно еще элегантнее:

// const person = people.find(person => person.budget === 5000) // Лямбда-функция
// console.log(person)

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => car.toUpperCase()) // Методы для всего массива, а не для отдельного элемента
// console.log(upperCaseCars)
// console.log(cars)
// const pow2 = num => num ** 2
const fib = [1, 1, 2, 3, 5, 8, 13, 21]
// console.log(fib.map(pow2).map(Math.sqrt))
// const pow2Fib = fib.map(pow2)
// const featuredNumbers = pow2Fib.filter(num => num > 20)
// console.log(featuredNumbers)
// console.log(pow2Fib)

// const allBudget = people
//     .filter(person => person.budget > 2000) // Красивая реализация, надо уркасть))
//     .reduce((acc, person) => { 
//         acc += person.budget
//         return acc
//     }, 0)
// console.log(allBudget)

// Example
// const text = 'Hello, we are learnong JavaScript'
// const revText = text.split('').reverse().join('')
// console.log(revText)