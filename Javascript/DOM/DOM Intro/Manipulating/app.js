const allImages = document.getElementsByTagName('img');
const h1 = document.querySelector('h1');
const allLinks = document.querySelectorAll('a');


// for(let img of allImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

// h1.style.color = 'purple';
// h1.style.border = '1px solid blue'
// h1.style.backgroundColor = 'lightgrey'

// allLinks.forEach(link => {
//     link.style.color = 'orange'
//     link.style.textDecorationColor = 'blue'
//     link.style.textDecorationStyle = 'wavy'
// })

const newImg = document.createElement('img');
newImg.src = "https://images.unsplash.com/photo-1611324153789-92d182b61bb0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
newImg.classList.add('square')
document.body.appendChild(newImg)

const newH3 = document.createElement('h3');
newH3.innerText = "I am NEW H3"
document.body.append(newH3)

const firstLi = document.querySelector('li');
const parentLi = firstLi.parentElement
parentLi.removeChild(firstLi)

const firstImg = document.querySelector('img')
firstImg.remove()
