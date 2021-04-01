const in1 = [
    [4, 10],
    [460, 4],
    [590, 6],
    [550, 5],
    [590, 5],
    [111,10]

];

// const in2 = [
//     [4, 9],
//     [100, 5],
//     [120, 10],
//     [300, 2],
//     [500, 3]
// ];

// function readMat() {
//     const readline = require('readline');

//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     let arr = [];
//     let mat = [];

//     let c = 1;
//     let size = 0;

//     rl.on('line', (answer) => {
//         // TODO: Log the answer in a database
//         let splitAns = answer.split(" ");
//         if (c == 1) {

//             size = parseInt(splitAns[0]);
//         }
//         c = 0;
//         arr.push(splitAns[0]);
//         arr.push(splitAns[1]);
//         mat.push(arr);
//         arr = [];

//         if (mat.length == size + 1) {
//             rl.close();
//             return (mat);
//         }
//         // console.log(`Thank you for your valuable feedback: ${arr}`);
//     });
// }

const Thief =  (in1) =>{
    
    const grams = in1[0][1];
    let profit=[];

    for(let i = 1; i<in1.length;i++){
        
        for(let j = i+1; j<in1.length; j++) {
            if (in1 [i][1] + in1[j][1] == grams){
                // console.log(`${i} and ${j}`)
                profit.push(in1 [i][0] + in1[j][0])
            }
        }
        if (in1 [i][1] == grams){
            // console.log(i)
            profit.push(in1 [i][0])
            
        }
        
    }

    if(profit.length){
        return (Math.max(...profit))
    }
    return('Got caught!')
    
}


// const in1= await readMat();
console.log(Thief(in1));