                                        // Объекты
const person = Object.create({
    calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.year)
    }
}, {
    name: {
        value: 'Artem',
                // Property-дескрипторы:
        enumerable: true, // Разрешили итерироваться по полю (по умолчению нельзя)
        writable: true, // Разрешили изменять значение
        configurable: true // Разрешили удалять ключ из объекта
    },
    year: {
        value: 2002,
        enumerable: false, // Можно ли по нему итерироваться
        writable: false,
        configurable: false
    },
    age: {
                // Getter и Setter 
        get() {
            return new Date().getFullYear() - this.year
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})          
console.log(person)                       

person.name = 'Maxim' // Эффекта нет

for(let key in person) {
    if(person.hasOwnProperty(key)) { // Если не писать, то будет пробегаться еще и по прототипу, где enumerable = true
        console.log(key, person[key])

    }
}