const readline = require('readline');

    const readfunc = new Promise ((resolve,reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        let arr=[];
        let mat=[];
    
        rl.on('line', (input) => {
        
        let splitAns=input.split(" ");
        arr.push(parseInt(splitAns[0]))
        arr.push(parseInt(splitAns[1]))
        mat.push(arr)
        arr=[];
    
      });
    
      rl.on('close', () =>{
          
        
        resolve(mat);
          
      })
    
    });

    const Thief = (in1) =>{
        
        const grams = in1[0][1];
        // console.log(grams)
        let profit=[];
    
        for(let i = 1; i<in1.length;i++){
            
            for(let j = i+1; j<in1.length; j++) {
                // console.log(in1 [i][1] + in1[j][1])
                if (in1 [i][1] + in1[j][1] == grams){
                    // console.log(`${i} and ${j}`)
                    profit.push(in1 [i][0] + in1[j][0])
                }
            }
            if (in1 [i][1] == grams){
                profit.push(in1 [i][0])
                
            }
            
        }
        
        if(profit.length){
            return (Math.max(...profit))
        } else {        return ('Got caught!') }


        
    }
    
    const outputResult = async() =>{

        const data = await readfunc;
        
        console.log(Thief(data));

    }

    outputResult();
   

