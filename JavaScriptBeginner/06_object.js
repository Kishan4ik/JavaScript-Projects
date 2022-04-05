                                        // Объекты

const person = {
    name : 'Artem',
    age: 20,
    isProgrammer: true,
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key',  // key_4
    greet() {
        console.log('Greet from person')
    },
    info() {
        console.info('Информация про человека по имени ', this.name)
        // Здесь this - это текущий объект, в котором мы работаем
    }
}                                        

// console.log(person.name)
// console.log(person['age'])
// console.log(person["complex key"])

// person.greet()
// person.age++
// //person.key_4 = undefined
// delete person['key_4']
// console.log(person)

                // Деструктуризация

// const name = person.name
// const age = person.age
// console.log(name, age)  // Плохо, потому что есть дублирование кода

// const {name, age : personAge = 10, isProgrammer} = person // Лучше
// console.log(name, personAge, isProgrammer)

// for(let key in person) {                    // Такой цикл опасен, потому что он пробегает не только по полям объекта, но может 
//                                             // также зацепить его прототип
//     if(person.hasOwnProperty(key)) {        // А вот проверка на то, чтобы не выбегал за пределы ключей                                      
//         console.log('key: ' + key)
//         console.log('value: ' + person[key])
//     }
// }                

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log('key: ' + key)
//     console.log('value: ' + person[key])
// })
// console.log(keys)

                // Контекст
// Добавили в person метод info
// person.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => console.log(`"${key}": ${this[key]}`))
    },
    withParams(top = false, between = false, bottom = false) {
        if(top) {
            console.log('-------- Start ---------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if(between && index !== array.length - 1) {
                console.log('-----------------')
            }
        })
        if(bottom) {
            console.log('-------- End ---------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound() // Функция говорит, что мы в функции logger вместо this используем то, что стоит в скобках (т.е. person)

// logger.withParams.call(person, true, true, true) // то же самое, только короче

logger.withParams.apply(person, [true, true, true])



