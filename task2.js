



// let array = [100, 0, 50, 110, 25]



// console.log(Math.max(...array));
// console.log(Math.min(...array));


let arr = [1,[3, [4,[5]]]];

let flatting = arr.flat(Infinity)
let summing = flatting.reduce((a,b) => a+b, 0)

console.log(summing);