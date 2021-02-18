const req = new XMLHttpRequest();

req.onload = () => {
    console.log('ALL DONE!!')
    const parsedJSON = JSON.parse(req.response)
    console.log(parsedJSON.ticker.price)
}

req.onerror = () => {
    console.log('ERROR!!!')
    console.log(this)
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send()