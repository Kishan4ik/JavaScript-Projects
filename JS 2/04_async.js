                                        // Асинхронность
// console.log('Start')         
// console.log('Start2')
// window.setTimeout(function() {
//     console.log('Inside timeout, after 2 seconds')
// }, 2000)
// console.log('End') // Нарушается порядок выполнения

// console.log('Start')         
// console.log('Start2')
// window.setTimeout(function() {
//     console.log('Inside timeout, after 2 seconds')
// }, 2000)
// console.log('End') // Нарушается порядок выполнения

// function timeout2sec() {
//     console.log('timeout2sec')
// }
// setTimeout(timeout2sec, 2000) // В setTimeout передаем название функции, без скобочек!!

// http://latentflip.com/loupe/ - там наглядно показана работа программы с Call Stack и прочими
// Метод setTimeout сначала закидывает функцию из тела в Web Apis, затем в Callback Queue,
// которая ждет завершения всех процессов в Call Stack, и только потом передает туда действие функции из тела setTimeout
// Поэтому, если время задержки нулевое, но функция все равно заключена в метод setTimeout, порядок выполнения нарушится и 
// ее результат будет выведен только после выполнения всех процессов без отсрочек (без setTimeout и т.д.)

