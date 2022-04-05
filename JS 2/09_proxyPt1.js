                                        // Proxy
// Прокси - некоторый класс, который позволяет создавать ловушки   

//Objects
const person ={
    name: 'Artem',
    age: 20,
    job:'fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        //Данный метод возвращает объект и поле, на которые он ставит ловушки
        //Метод реализует ловушки, где мы можем переписать базовый функционал методов объекта
        console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true
    }
})

//Functions

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...')
        
        return target.apply(thisArg, args).toUpperCase() // Можем делать что угодно
    }
})

//Classes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')

        return new Proxy(new target(...args), //Target - это тот же класс Person, т.е. мы вызываем класс от нашего массива аргументов
        {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })}
})

const p = new PersonProxy('Maxim', 30)
