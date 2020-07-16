import React from "react";
import classes from "./Navbar.module.css";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";


function Navbar()  {
    return (
        <nav className={classes.nav}>
            <SwipeableTemporaryDrawer />
        </nav>
    )
}

export default Navbar;
