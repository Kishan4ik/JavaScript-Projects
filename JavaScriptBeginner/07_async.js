//Event Loop


// const timeout = setTimeout( () => console.log('Afteer timeout'), 2500) 
// clearTimeout(timeout)

// const interval = setInterval( () => console.log('Afteer timeout'), 1000) 
// clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay( () => console.log('After 2 seconds'), 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(() => console.log('After 2 seconds'))
//     .catch(err => console.error('Error: ', err))
//     .finally(()=> console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2 ,3 ,5, 8, 13
]))
// getData().then( data => console.log(data))

async function asyncExample() {
    try{ 
        await delay(3000)
        const data = await getData()
        console.log(data)
    } catch(e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()

// Асинхронность в Js встречается довольно часто - 
// от таймаутов до аякс-запросов (запрос на сервер
// и получение ответов без обновления страницы).

// Любой клик и скролл - это примеры асинхронности

