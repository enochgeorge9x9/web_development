const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('book.com/page-1',
//     function (response) {
//         console.log('IT WORKED!!! (1st Req)')
//         console.log(response)
//         fakeRequestCallback('book.com/page-2',
//             function (response) {
//                 console.log('IT WORKED!!! (2nd Req)')
//                 console.log(response)
//                 fakeRequestCallback('book.com/page-3',
//                     function (response) {
//                         console.log('IT WORKED!!! (3rd Req)')
//                         console.log(response)
//                     }, function (err) {
//                         console.log('ERROR!! (3rd Req)', err)
//                     })
//             },
//             function (err) {
//                 console.log('ERROR!! (2nd Req)', err)
//             })
//     },
//     function (err) {
//         console.log('ERROR!! (1st Req)', err)
//     })



// fakeRequestPromise('yelp.com/api/comments/page-1')
//     .then(() => {
//         console.log('IT WORKED (page-1)')
//         fakeRequestPromise('yelp.com/api/comments/page-2')
//             .then(() => {
//                 console.log('IT WORKED (page-2)')
//                 fakeRequestPromise('yelp.com/api/comments/page-3')
//                     .then(() => {
//                         console.log('IT WORKED (page-3)')
//                     })
//                     .catch(() => {
//                         console.log('ERROR!!! (page-3)')
//                     })
//             })
//             .catch(() => {
//                 console.log('ERROR!!! (page-2)')
//             })
//     })
//     .catch(() => {
//         console.log('ERROR!!!(page-1)')
//     })


fakeRequestPromise('yelp.com/api/comments/page-1')
    .then((data) => {
        console.log('IT WORKED (page-1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/comments/page-2')
    })
    .then((data) => {
        console.log('IT WORKED (page-2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/comments/page-3')
    })
    .then((data) => {
        console.log('IT WORKED (page-3)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/comments/page-3')
    })
    .catch((err) => {
        console.log('OH NOOO! Error')
        console.log(err)
    })

