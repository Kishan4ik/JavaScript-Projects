                                        // Async await
//Делаем прогу, чтобы обращаться к серверу и доставать из него данные
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}   
// delay(2000).then(() => console.log('2 seconds'))     

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//     .then(() =>  fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
// .then(data => console.log('Data:', data))
// .catch(e => console.error(e))

// Удобно, но можно лучше (используя Async await)

async function fetchAsyncTodos () {     // Если используем await, то нужен async перед функцией
    console.log('Fetch todo started...')
    try{
        await delay(1000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch(e) {
        console.error(e)
    } finally {
        await delay(500)
        console.log('Fetch todo finished!')
    }
}

fetchAsyncTodos()