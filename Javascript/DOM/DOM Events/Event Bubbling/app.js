const button = document.querySelector('button')
const container = document.querySelector('#container')

button.addEventListener('click', (evt) => {
    evt.stopPropagation()
    container.style.backgroundColor = randColor()
})

container.addEventListener('click', () => {
    container.classList.toggle('hide')
})

function randColor(){
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    return `rgb(${r}, ${g}, ${b})`

}