//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 200; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.textContent = `#${i}`
    imgElement = document.createElement('img');
    imgElement.src = `${baseURL}${i}.png`
    pokemon.classList.add('pokemon')
    imgElement.classList.add('img')

    pokemon.appendChild(imgElement)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}

/* <div>
    <img>
    <span>1</span>
</div> */