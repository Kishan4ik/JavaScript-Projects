const buttons = document.querySelectorAll('.button')
const res = document.querySelector('.res')
const screen = document.querySelector('.screen')
let resString = ''
let resNum = 0
let calcRes = 0

symbolEntering()

function resShow () {
    const result = calculate()
    screen.style.padding = '0'
    screen.innerHTML = '<span class="screenString">' + resString + '= </span> <p class="screenRes">' + result + '</p>'
    resNum = 0
    resString =''
    
}

function symbolEntering () {
    for(const btn of buttons) {
        btn.addEventListener('click', () => {
            screen.style.padding = '20px'
            let value
            if(btn.classList.contains('num')) {
                value = parseInt(btn.textContent)
                resNum *= 10
                resNum += value
                resString += `${value}`
                screen.innerHTML = resString
            } else if(btn.classList.contains('op')) {
                // resString = `${calculate()}`
                resNum = 0
                resString += btn.textContent
                screen.innerHTML = resString
            } else if(btn.classList.contains('res')) {
                // const result = calculate()
                // screen.innerHTML = resString + '=' + result 
                // resNum = 0
                // resString =''
                resShow()
            } else if (btn.classList.contains('mult')) {
                resString = `${resNum}`
                resNum = 0
                resString += '*'
                screen.innerHTML = resString
            } else if (btn.classList.contains('divide')) {
                resString = `${resNum}`
                resNum = 0
                resString += '/'
                screen.innerHTML = resString
            } else if (btn.classList.contains('del')) {
                resNum = Math.floor(resNum/10)
                resString = resString.slice(0, -1)
                screen.innerHTML = resString
            } else if (btn.classList.contains('clear')) {
                resNum = 0
                resString = ''
                screen.innerHTML = ''
            } else if (btn.classList.contains('pm')) {
                if (resNum == resString) {
                    resNum = -resNum
                    resString = `${resNum}`
                    screen.innerHTML = resString
                }
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

for(let k of buttons) {
    k.onclick = () => {
        // screen.innerHTML = "Pressed the button"
            k.style.boxShadow = ''
            k.style.backgroundColor = 'rgb(116, 116, 116)'
        // k.style.boxShadow = '0 0 20px rgb(94, 94, 94), 0 0 2px rgb(94, 94, 94)'
        setTimeout( () => {
            k.style.boxShadow = ''
            k.style.backgroundColor = 'rgb(136, 136, 136)'
            k.style.boxShadow = '0 0 1px rgb(94, 94, 94), 0 0 2px rgb(94, 94, 94)'
            // screen.innerHTML = 'end'
    }, 200)
    }
}