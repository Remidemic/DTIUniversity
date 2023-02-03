import React from "react"


const MajorIncome = ({ income }) => {

    // ROOT console.log(income.major !=== undefined)
    // use MIT as school w 1 major     


    

    if (income.major !== undefined) {

        // console.log(income.major.earnings)
        return <>

            <p>  +++ </p>

        </>
    }


    // if (income.earnings !== undefined) {

    //     console.log(" full");
    //     return <>
    //         <div>
    //             <p> income listed </p>
    //         </div>
    //     </>
    // }
}




// if ((majorPick.major !== undefined) && (keyPick !== undefined)) {

//     console.log(majorPick.major.earnings.highest["1_yr"].overall_median_earnings)

//     return <>
//         <div className={classes.frame}>
//             <p>major Key: {keyPick}</p>
//             <p>major Title: {majorPick.major.title}</p>
//             <p>Certificate: {majorPick.major.credential.title}</p>
//             <p>overall median earnings:</p>
//             <p>1st yr: ${majorPick.major.earnings.highest["1_yr"].overall_median_earnings}</p>
//             <p>2nd yr: ${majorPick.major.earnings.highest["2_yr"].overall_median_earnings}</p>
//             <p>3rd yr: ${majorPick.major.earnings.highest["3_yr"].overall_median_earnings}</p>
//         </div>
//     </>
// }

export default MajorIncome
