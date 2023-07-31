import React from "react";

import MainContent from "./MainContent";
import SocialMediaHandles from "../Layout/SocialMediaHandles";
import classes from './AllContent.module.css'
import About from "./AboutContent";

const AllContent = () => {
 return ( 
    <div className = {classes['all-content']}>
        <SocialMediaHandles />
        <div>
            <MainContent/>
            <About />
        </div>
        
        <div className={classes.mail}>
            <a><p>hugotchee1@gmail.com</p></a>
        </div>
    </div>
 )
}

export default AllContent;