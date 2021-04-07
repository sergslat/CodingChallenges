function divisibleSumPairs(n, k, ar) {

let cont = 0;    
    for (let x =0; x<ar.length; x++ ){

        for(let y = x+1; y<ar.length;y++){
            // if((ar[x]<ar[y]) && ((ar[x]+ar[y]) % k == 0)) {
                if(((ar[x]+ar[y]) % k == 0)) {
                cont++;

                // console.log (`${ar[x]} and ${ar[y]}`)
            }
        }
        

    }

    return cont;


}

console.log (divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));


