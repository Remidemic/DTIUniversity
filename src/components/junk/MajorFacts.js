import React from 'react'
import classes from './MajorFacts.module.css'

function MajorFacts({ majorPick, keyPick }) {

    if ((majorPick.major !== undefined) && (keyPick !== undefined)) {

        // console.log(majorPick.major.earnings.highest["1_yr"].overall_median_earnings)

        return <>
            <div className={classes.frame}>
                <p>Program Major {keyPick}: {majorPick.major.title}</p>
                <p>Certificate: {majorPick.major.credential.title}</p>
                <p>Overall median earnings:</p>
                <p>1st yr: ${majorPick.major.earnings.highest["1_yr"].overall_median_earnings}</p>
                <p>2nd yr: ${majorPick.major.earnings.highest["2_yr"].overall_median_earnings}</p>
                <p>3rd yr: ${majorPick.major.earnings.highest["3_yr"].overall_median_earnings}</p>
            </div>
        </>
    }
}

export default MajorFacts