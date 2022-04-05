                                        //1 Number

// const num = 42
// const float = 42.42
// const pow = 10e3
// console.log(pow)

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(+stringFloat + 2)

// console.log(parseInt(stringInt) + 2)
                                        
// console.log(0.4 + 0.2)
// console.log(4/10 + 1/5)
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

                                        //2 BigInt

// console.log(typeof 900719925474099199999999n)                                         
// //console.log(typeof 900719925474099199999999.3252452n) // compile Error (That's not integer) 

// //console.log(10n - 4 ) //Error
// console.log(10n - BigInt(4)) //Ok
// //Чтобы оперировать с числами BigInt мы можем использовать только BigInt

//  console.log(5n*10n) // Ok
// console.log(5*10n) // Error
                                        //3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(5))
// console.log(Math.pow(2, 5))
// console.log(Math.abs(-42))
// console.log(Math.max(13, 321, -12314))
// console.log(Math.min(13, 321, -12314))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.5))
// console.log(Math.trunc(4.9))
// console.log(Math.random())
                                        // 4 Example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}                                        

console.log(getRandomBetween(10, 42));
