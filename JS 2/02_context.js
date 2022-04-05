                                        //Контекст

function hello() {
    console.log('Hello', this)
}                                        

const person = {
    name: 'Artem',
    age: 20,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)  
        console.log(`Job is ${job}`)  
        console.log(`Phone is ${phone}`)  
        console.groupEnd()
    }
}

const Lena = {
    name: 'Elena',
    age: 23
}
// person.logInfo.bind(Lena, 'Frontend', '8-999-123-21-23')()   // Этот метод создает новую функцию, которую надо вызвать
// person.logInfo.call(Lena, 'Frontend', '8-999-123-21-23')     // Здесь метод не вызывается как функция. Этот метод не просто возвращает функцию, но и вызывает ее
// person.logInfo.apply(Lena, ['Frontend', '8-999-123-21-23'])  // Отличие от предыдущего в том, что аргументы передаются в кач-ве массива

/// ===============

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) { // Не самый удобный вариант, т.к. функцию надо импортировать для вызовва, всегда нужно в нее передавать массив и т.д.
//     return arr.map((i) => i*n)
// } 

Array.prototype.multBy = function(n) { // Можно добавить метод в прототип, чтобы избежать вышеописанных проблем
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(5))
