import React from 'react';

import Button from '../UI/Button/Button';
import classes from './MainContent.module.css';

const MainContent = (props) => {
    return (
        <section className={classes.main}>
            <p>Hi, my name is</p>
            <h1>Ugochukwu Victor.</h1>
            <h2>I build things for the web.</h2>
            <h3>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</h3>
            <Button className={classes.btn}>Check out my projects</Button>       
        </section>
    )
};

export default MainContent;