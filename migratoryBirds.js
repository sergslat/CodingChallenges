// function migratoryBirds(arr) {

//     let contarr=[];
//     let ar2=[];

//     for (let x =0; x<arr.length; x++ ){
//         let cont=1;
//         for(let y = x+1; y<arr.length;y++){
            
//              if(arr[x] == arr[y]) {
//                 cont++;
                
//             }
//         }
        
//         contarr.push(cont)

//     }

//     let maxsights = Math.max(...contarr)
//     let index=-1;
//     ar2=contarr.map ( (n) =>{

//         index++

//         if( n == maxsights) {
//             return arr[index]
//         }else{
            
//             return 0;
//         }
//     }) 

    
//   const ar3 = ar2.filter((n) => n != 0)  
       

//    return Math.min(...ar3);


// }

function migratoryBirds(arr) {
    let sorted = arr.sort();
    let ans = sorted[0];
    let maxOccur = 1,
        counter = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        // counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
        // console.log(sorted[i-1])
        if(sorted[i] === sorted[i-1]){
            counter++;

        } else {
            counter=0;
        }

        if (counter > maxOccur) {
            ans = sorted[i];
            maxOccur = counter;
        }
    }

    return ans;
}



console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))