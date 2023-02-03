import React from 'react'
import classes from './MajorFacts.module.css'

function MajorFacts({ majorPick, keyPick }) {

    if ((majorPick.major !== undefined) && (keyPick !== undefined)) {

        return <>

            <div className={classes.frame}>

            <p>major Key: {keyPick}</p>
            <p>major Title: {majorPick.major.title}</p>
            <p>median earnings: {majorPick.major.earnings.highest["1_yr"].nonmale_median_earning}</p>
            </div>
        </>
    }
}

export default MajorFacts