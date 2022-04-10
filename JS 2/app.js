const people = [
    {name: 'Artem', age: 20, budget: 70000},
    {name: 'Vasya', age: 24, budget: 40000},
    {name: 'Petya', age: 19, budget: 50000},
    {name: 'Kolya', age: 34, budget: 100000},
    {name: 'Masha', age: 73, budget: 10000},
    {name: 'Sasha', age: 47, budget: 200000},
]

// for(let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for(person of people) {
//     console.log(person)
// }

    //ForEach

// people.forEach(function(person, index, pArr) {
//     console.log(person)
// })

// people.forEach((person, index, pArr) => console.log(person))

    //Map

// const newPeople = people.map(person => `${person.name} (${person.age})`) 
// console.log(newPeople)

    //Filter

// const adults = []
// for(let i = 0; i < people.length; i++) {
//     if(people[i].age > 25) {
//         adults.push(people[i])
//     }
// }

// const adults = people.filter(person => person.age > 25)

// console.log(adults)

    //Reduce
// let amount = 0
// for(let i = 0; i < people.length; i++) {
//         amount += people[i].budget
//     }    

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

    //Find

// const Artem = people.find(person => person.name === 'Artem')
// console.log(Artem)

    //FindIndex

// const ArtemIndex = people.findIndex(person => person.name === 'Artem')
// console.log(ArtemIndex)   

//===========================

