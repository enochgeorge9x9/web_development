const input_1 = document.querySelectorAll('input')[0]
const h1_1 = document.querySelectorAll('h1')[0]

input_1.addEventListener('input', (evt)=>{
    h1_1.innerText = input_1.value
})


const input_2 = document.querySelectorAll('input')[1]
const h1_2 = document.querySelectorAll('h1')[1]

input_2.addEventListener('change', (evt)=>{
    h1_2.innerText = input_2.value
})