                                        // Promise
                            
// console.log('Request data...')

// setTimeout(() => {
//     console.log('Perparing data...')
//     const backendData = {
//         server: 'aws',
//         portL: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recieved', backendData)
//     }, 2000)
// }, 2000)
// Слишком большая вложенность, поэтому будем использовать промисы:

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             portL: 2000,
//             status: 'working'
//         }
//         resolve(backendData)          
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => { // тут было объявление p2, но  тогда остается вложенность
//         setTimeout(() => {
//             data.modified = true
//             resolve(data) //Меняем на reject и видим, как ловится ошибка
//             // console.log('Data recieved', data)
//         }, 2000)
//     })
    
//     // p2.then(clientData => {
//     //     console.log('Data recieved', data)
//     // }) 
// }).then(clientData => console.log('Data recieved', clientData))
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finally'))

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

// sleep(2000).then(() => console.log('Awake after 2 seconds'))
// sleep(3000).then(() => console.log('Awake after 3 seconds'))

Promise.all([sleep(2000), sleep(5000)])
.then(() => console.log('All promises')) //Ждет, пока замершится последний

Promise.race([sleep(2000), sleep(5000)])
.then(() => console.log('Race promises')) //Ждет, пока завершится первый
