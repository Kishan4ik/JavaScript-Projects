// Wrapper

const withDefaultValue = (target,defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
    x: 24,
    y: 42
}, 0) // Задаем стандартное значение 0 для всех ключей, которые не заданы (есть х и у, а например для z будет 0)

//Hidden properies
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        //реализуем методы, с помощью которых те свойства, которые начинаются с префикса, были
        //в объекте, но мы к ним никак не могли получить к ним доступ (итерация, доступ напрямую и т.д.)
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
         //Reflect Возвращает массив из ключей объекта
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, reciever) => (prop in reciever) 
            ? obj[prop] 
            : undefined
    })
}
const data = withHiddenProps({
    name: 'Artem',
    age: 20,
    _uid: '122324'  // При работе с полями data мы можем вывести список аргументов
                    // (там будет "_uid"), но при обращении к нему будет выведено 'undefined'
                    // плюс любые попытки обратиться к нему будут отклонены 
                    // Пример: '_uid' in data -> false 
})

//Optimization

//Proxy делает работу с большими массивами удобнее

// const index = {}    
// userData.forEach(i => (index[i.id] = i))    //Примерный принцип работы

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item));
        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push': return item => {
                        index[item.id] = item
                        arr[prop].call(arr, item)
                    }
                    case 'findById': return id => index[id]
                    default: return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 1, name: 'Sasha', job: 'Fullstack', age: 25},
    {id: 2, name: 'Vasya', job: 'Backend', age: 30},
    {id: 3, name: 'Masha', job: 'Frontend', age: 20},
    {id: 4, name: 'Sonya', job: 'Teacher', age: 44}
])
