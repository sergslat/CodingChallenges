function dayOfProgrammer(year) {

    if (year <1918){
        let leap = (year%4==0)? 1:0;

        if (leap) return (`12.09.${year}`)
        return (`13.09.${year}`)
        
    } else if (year > 1918){
        let leap = ((year%400==0)||(year%4==0 && year%100!=0))? 1:0;

        if (leap) return (`12.09.${year}`)
        return (`13.09.${year}`)
    } else return (`26.09.${year}`)

}

console.log(dayOfProgrammer(1918))
