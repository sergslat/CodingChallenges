const s='12:01:00AM'
const s1='10:01:00AM'
const s2 ='12:01:00PM'
const s3 ='11:59:59PM'

const timeConv = (s) =>{

    let sarr=s.split("")
    let sarr2 = s.split(':')

    const AP = (s.split("")[8]);
    const hour = (s.split(':')[0]);
    if(AP == 'A'){
        if(hour=='12'){
            return( '00'+ ':'+sarr2[1]+':'+sarr[6]+sarr[7])

            // console.log(rs)
        } else {
            return(sarr2[0] + ':' + sarr2[1]+ ':' + sarr[6]+sarr[7] )
         }

    } else { //if AP=P
        if(hour=='12'){
            return( hour + ':'+sarr2[1]+':'+sarr[6]+sarr[7])

            // console.log(rs)
        } else {
            let hourPlus12=parseInt(hour)+12;
            // return hourPlus12;
            return(hourPlus12 + ':' + sarr2[1]+ ':' + sarr[6]+sarr[7] )
         }

    }

}


console.log(timeConv(s3))