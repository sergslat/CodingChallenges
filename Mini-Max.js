const arr = [1,3,5,7,9];

const miniMax = (arr) => {

let min = (Math.min(...arr))
let max = (Math.max(...arr))
const getSum = (total,num) => (total+num)
let maxSum= arr.reduce(getSum,-min)
let minSum= arr.reduce(getSum,-max)

return(`${minSum} ${maxSum}`);



}

console.log(miniMax(arr));