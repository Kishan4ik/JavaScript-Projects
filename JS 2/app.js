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