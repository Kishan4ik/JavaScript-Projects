// Работа с DOM 

// Теперь я знаю web, API,
 

// Здесь поговорим о том, как JS работает с HTML и CSS
// Пока что самое прикладное из всего, что было изучено

// web - наиболее распространенная область применения JS
// JS имеет доступ к html-файлу

// Простые методы обращения к window: alert, prompt, confirm
// можно писать window.alert, а можно просто alert
// При этом объект window относится исключительно к браузеру
// window.prompt('What is your name?')
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]          // Старье
// const heading2 = document.getElementsByClassName('h2-class')[0]  // Старье
const heading2 = document.querySelector('h2') // Крутой метод
console.log(heading2)

//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[1]
console.log(heading3)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    const url = event.target.getAttribute('href')
    console.log('Click on link', url)
    window.location = url
})

setTimeout( () => addStylesTo(heading, 'Fuck Hedgehogs'), 300)
// Поменяли текст и его параметры
setTimeout(()=> addStylesTo(link, 'Stupid bitch', 'yellow'), 900)
setTimeout(()=> addStylesTo(heading2, 'And you too', 'orange'), 600)

function addStylesTo(node, text = 'Put your text here', color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = '#fd0'
    node.style.width = '100%'
    node.style.display = 'block'
    node.style.opacity = '0.9'
    node.style.padding = '2rem'
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    console.log('click')
    if(heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#fd0'
    }
}

heading2.addEventListener('dblclick', () => {
    console.log('click')
    if(heading2.style.color === 'red') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = '#fd0'
    }
})

