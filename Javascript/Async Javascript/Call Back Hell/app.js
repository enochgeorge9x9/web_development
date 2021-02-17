// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'blue';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'orange';
//             },1000)
//         },1000)
//     },1000)
// },1000)


const delayColorChanger = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
};

delayColorChanger('blue', 1000, () => {
    delayColorChanger('orange', 1000, () => {
        delayColorChanger('red', 1000, () => {
            delayColorChanger('green', 1000, () => {
        
            })
        })
    })
});