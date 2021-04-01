const readline = require('readline');


// const readfunc = () =>{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let arr=[];
    let mat=[];
    
    let c=1;
    let size=0;
    
    rl.on('line', (answer) => {
        // TODO: Log the answer in a database
        let splitAns=answer.split(" ");
        if(c==1){
    
            size = parseInt(splitAns[0]);
        }
        c=0;
        arr.push(splitAns[0])
        arr.push(splitAns[1])
        mat.push(arr)
        arr=[];
        
        if (mat.length == size + 1 ) {
            rl.close();
            // return(mat)
            console.log(mat)
        }
        
      
         
      });

// }

// console.log(readfunc());
  