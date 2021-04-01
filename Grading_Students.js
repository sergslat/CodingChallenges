const n= [73,67,38,33];


const getGrade = (grades) => {

let result=[];
for (let x in grades){

    let mod = grades[x] % 5;
    if ( mod > 2 && grades[x]>=38){
        result.push(grades[x]+5-mod)
    } else {
        result.push(grades[x])
    }
}    
 return result;

}

console.log(getGrade(n));