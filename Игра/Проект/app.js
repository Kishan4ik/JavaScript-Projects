const buttons = document.querySelectorAll('.button')
const res = document.querySelector('.res')
const screen = document.querySelector('.screen')
let resString = ''
let resNum = 0
let calcRes = 0

reading()
function reading(number) {
    symbolEntering()

}

function symbolEntering () {
    for(const btn of buttons) {
        btn.addEventListener('click', () => {
            let value
            if(btn.classList.contains('num')) {
                value = parseInt(btn.textContent)
                resNum *= 10
                resNum += value
                resString += `${value}`
                screen.innerHTML = resString
            } else if(btn.classList.contains('op') && !btn.classList.contains('mult') ) {
                resString = `${resNum}`
                resNum = 0
                resString += btn.textContent
                screen.innerHTML = resString
            } else if(btn.classList.contains('res')) {
                const result = calculate()
                screen.innerHTML = resString + '=' + result 
                resNum = 0
                resString =''
                // Надо сделать переезд текста вверх и вывод результата шрифтом другого размера
            } else if (btn.classList.contains('mult')) {
                resString = `${resNum}`
                resNum = 0
                resString += '*'
                screen.innerHTML = resString
            } else if (btn.classList.contains('del')) {
                resNum = Math.floor(resNum/10)
                resString = resString.slice(0, -1)
                screen.innerHTML = resString
            } else if (btn.classList.contains('clear')) {
                resNum = 0
                resString = ''
                screen.innerHTML = ''
            }
            console.log(resNum, resString)

        })
    }
}

function calculate() {
    const res = resString 
    calcRes = eval(resString)
    if(calcRes === undefined) {
        return 0
        }
    return calcRes
}
