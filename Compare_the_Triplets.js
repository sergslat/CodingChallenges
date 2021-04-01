const a = [1, 2, 3,4]
const b = [3, 2, 1,5]

// const compare = (a,b) => {
//     if(a>b) return 1
//     return 0;
// }
let scoreA=0;
let scoreB=0;

for(let x in a){
    if (a[x] > b[x]) scoreA++
    else if (a[x] < b[x]) scoreB++
}

console.log(scoreA , scoreB);
