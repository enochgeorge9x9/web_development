const btn = document.querySelector('#v2');

btn.onclick = () => {
    console.log("Hi")
    console.log("BYE")
}

btn.onmouseenter = () => (console.log('NANiiii HOVERRR'))


document.querySelector('h1').onclick = () => {
    alert("YOU CLICKED AN h1")
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', ()=>(alert('BOI')))

function twist(){
    console.log("TWIST")
}

function shout(){
    console.log("SHOUT")
}

const tas = document.querySelector("#tas");

tas.addEventListener('click', twist, {once: true})
tas.addEventListener('click', shout)