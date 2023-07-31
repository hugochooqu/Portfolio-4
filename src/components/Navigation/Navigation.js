import React from "react";

import classes from './Navigation.module.css';
import Button from "../UI/Button/Button";

const Navigation = (props) => {
    return (
        <div className={classes.navigation}>
         <ul className={classes['custom-counter']}>
            <li>About</li>
            <li>Work</li>
            <li>Experience</li>
            <li>Contact</li>
         </ul>
         <Button className={classes.btn}> Resume</Button>
        </div>
        
    )
} 

export default Navigation;