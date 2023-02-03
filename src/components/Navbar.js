import React from 'react'
import classes from './Navbar.module.css'

function Navbar() {
    return (

        <div className={`${classes.box}`}>
            <div className={`${classes.navbar}`}>
                <h3>about</h3>
                <h1>DTIU</h1>
                <h3>login/sign up</h3>
            </div>
            
        </div>
    )
}

export default Navbar