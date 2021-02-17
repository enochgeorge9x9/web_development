//! Factorial Function
// function hex(r,g,b){
//     return "#" + ((1 << 24) + ( r<<16 ) + (g << 18) + b).toString(16).slice(1)
// }

// function rgb(r,g,b){
//     return `rgb(${r},${g},${b})`
// }
// console.log(rgb(155,234,122))

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function(){
//         const {r,g,b} = this;
//         return `rgb(${r},${g},${b})`
//     }
//     color.hex = function(){
//         const {r,g,b} = this;
//         return "#" + ((1 << 24) + ( r<<16 ) + (g << 18) + b).toString(16).slice(1)
//     }
//     return color
// }

// const firstColor = makeColor(231,3,221);
// console.log(firstColor.hex())

//*Constuctor Function

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 18) + b).toString(16).slice(1)
// }

// Color.prototype.rgba = function (a = 1) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`
// }

// const color1 = new Color(40, 255, 60);
// const color2 = new Color(232, 3, 2);

// const h1 = document.querySelector('h1')
// h1.style.backgroundColor = color1.rgba(0.5)
