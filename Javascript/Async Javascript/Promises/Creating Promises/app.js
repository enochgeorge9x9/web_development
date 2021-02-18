// const fakeRequest = (url) => {
//     return new Promise((resolve, rejected) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand > 0.7) {
//                 resolve('YOu fake data is here', url)
//             }
//             rejected('Error! Try Again')
//         }, 1500)
//     })
// }

// fakeRequest('/dogs/bulls.com')
//     .then((data) => {
//         console.log('You data has been retrieved')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Something went wrong', err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

delayedColorChange('blue', 1000)
    .then(() => (delayedColorChange('red', 1000)))
    .then(() => (delayedColorChange('violet', 1000)))
    .then(() => (delayedColorChange('orange', 1000)))
    .then(() => (delayedColorChange('teal', 1000)))
    .then(() => (delayedColorChange('brown', 1000)))
    .then(() => (delayedColorChange('magenta', 1000)))