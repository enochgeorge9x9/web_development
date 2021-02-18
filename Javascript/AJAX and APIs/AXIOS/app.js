// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('RESPOSE FULFILLED', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('JSON Parsed')
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log('ERROR!', e)
//     })


// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.base, res.data.ticker.price)
//     })
//     .catch(e => {
//         console.log('ERROR!!', e)
//     })
// const fetchBTCprice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }
//     catch (e) {
//         console.log('ERROR!!', e)
//     }
// };



const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')

const addNewJoke = async () => {
    const newJoke = await getDadJoke();
    const newLi = document.createElement('li')
    newLi.append(newJoke)
    jokes.append(newLi)
}

const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke
    }catch(r){
        return 'SORRY!! NO NEW JOKES'
    }


}

button.addEventListener('click', addNewJoke)