import React from "react";
import classes from './Header.module.css'
// import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>DTIU</h1>
            {/* <HeaderCartButton onClick={props.onShowCart} /> */}
        </header>
        <div className={classes['main-image']}>
            {/* <img src={mealsImage} alt='food table' /> */}

        </div>

    </>
}
export default Header