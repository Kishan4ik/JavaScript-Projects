const item = document.querySelector('.item')
// console.log(item)
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)    // попадаем в область placeholder
    placeholder.addEventListener('dragenter', dragenter)   // заходим на территорию
    placeholder.addEventListener('dragleave', dragleave)   // покидаем область 
    placeholder.addEventListener('drop', drop)        // бросаем
    
    
}
function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('enter')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('leave')
}
function drop(event) {
    // console.log('drop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}

function dragstart(event) {
    console.log('Drag start', event.target);
    event.target.classList.add('hold')
    setTimeout(() =>
    event.target.classList.add('hide'), 0)
}

function dragend() {
    console.log('drag end')
    event.target.className = 'item'
}