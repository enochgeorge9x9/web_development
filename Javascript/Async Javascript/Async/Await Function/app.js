const delayChangeColor = (delay, color) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    }
    )
};

// delayChangeColor(1000, 'blue')
// .then(() => delayChangeColor(1000, 'red') )
// .then(() => delayChangeColor(1000, 'orange') )
// .then(() => delayChangeColor(1000, 'teal') )
// .then(() => delayChangeColor(1000, 'yellow') )
// .then(() => delayChangeColor(1000, 'darkblue') )
// .then(() => delayChangeColor(1000, 'magenta') )


// async function rainbow(){
//     await delayChangeColor(1000, 'red')
//     await delayChangeColor(1000, 'orange')
//     await delayChangeColor(1000, 'green')
//     await delayChangeColor(1000, 'yellow')
//     await delayChangeColor(1000, 'lime')
//     await delayChangeColor(1000, 'indigo')
//     return 'DONE with 7 rainbows!'
// }

// rainbow().then(() => console.log('end of rainbow'))

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Error! Timeout', delay)
            } else {
                resolve(`Here is your fake data ${url}`)
            }
        }, delay)
    })
}

// fakeRequest('/page.com')
//     .then((data) => { console.log(data) })

async function makeTwoRequest() {
    try {
        const data1 = await fakeRequest('/page-1')
        console.log(data1)
        const data2 = await fakeRequest('/page-2')
        console.log(data2)
        const data3 = await fakeRequest('/page-3')
        console.log(data3)
    } catch (e) {
        console.log('Error Caught', e)
    }
}

makeTwoRequest()