const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list') 
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')


timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
let time = 0
let score = 0

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
    } 
}

function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary"> ${score}<\span><\h1>`
}



function createRandomCircle() {
    const circle = document.createElement('div')
    circle.style.background = `${getRandomColor()}`
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0 ,width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


// Домашка

const colors = [
'linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)', 
'linear-gradient(90deg, #6FE316 0%, #39EC30 47%, #3ddb47 100%)', 
'linear-gradient(90deg, #F74646 0%, #EC3030 47%, #E31616 100%)',
'linear-gradient(90deg, #DD46F7 0%, #C030EC 47%, #B316E3 100%)'
]

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}