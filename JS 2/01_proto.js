                                        // Прототипы

// const person = 

const person = new Object({
    name: 'Artem',
    age: 20,
    greet: function() {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!')
}

const Lena = Object.create(person)
Lena.name = 'Elena'

const str = new String('I am string')