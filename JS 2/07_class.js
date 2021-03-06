                                        // ES6 Классы
// const animal = { // Обычное определение класса
//     name: 'Dog',
//     age: 5,
//     hasTail: true
// }             

// class Animal {
//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am animal!')
//     }
// }
// class Cat extends Animal {
//     static type = 'CAT'
//     constructor(options) {  // Конструктор должен вызывать весь родительский + новые поля 
//         super(options)      // Вызов родительского конструктора
//         this.color = options.color  // Добавление нужных нам полей
//     }
//     voice() {       // Можем переопределять функции (дочерний метод перетирает родительский)
//         super.voice()   // Обращаясь к объекту super, мы можем вызывать чистые родительские методы
//         console.log('I am cat!')
//     }
//     get ageInfo(){
//         return this.age * 7
//     }
//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Murzik',
//     age: 3,
//     hasTail: true,
//     color: 'Black' // Хотим добавить только сюда, но так не работает
// })

// const animal = new Animal({name: 'Animal', age: 5, hasTail: true})

// Пример на работу классов с использованием JavaScript

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector) // Через $ обозначаются переменные, которые содержат в себе доп. ноду (?)
    }
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }

}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box ({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle ({
    selector: '#circle',
    size: 90,
    color: 'green'
})