const arr = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
];


const diagDiff = (arr) =>{
    let j=0;
    let diag=0;
    let diag2=0;
    for(let i in arr){

    
        diag+=(arr[i][j]);
        diag2+=(arr[i][(arr[i].length-1-j)])
        j++;        
    }


    return(Math.abs(diag-diag2));

}

console.log(diagDiff(arr))
