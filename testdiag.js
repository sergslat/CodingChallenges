const readline = require('readline');

const readfunc =  () =>{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let arr=[];
    let mat=[];

    rl.on('line', (input) => {
    
    let splitAns=input.split(" ");
    arr.push(splitAns[0])
    arr.push(splitAns[1])
    mat.push(arr)
    arr=[];

  });

  rl.on('close', () =>{
      return (mat)
  })
}

const printmatrix =  () =>{

    const result =  readfunc();
    console.log(result);
}

printmatrix(); // prints undefined :(
    