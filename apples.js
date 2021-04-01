


function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const getSum = (total,num) => {
        
        if (num >= s && num <= t){
            total++;
        }
        return total;
    }
    
    for (let x in apples){
        apples[x]=apples[x]+a;
    }
    for (let y in oranges){
        oranges[y]=oranges[y]+b;
    }

    let happles= apples.reduce(getSum,0);
    let horanges= oranges.reduce(getSum,0);

    console.log(happles)
    console.log(horanges)


    
}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])