import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';


import classes from './SocialMediaHandles.module.css'

const SocialMediaHandles = () =>{
    return (
        <ul className={classes.social}>
           <li>
            <a href="/#"><FontAwesomeIcon icon={faGithub} size="xl"   /></a>
           </li>
           <li>
            <a href="/#"><FontAwesomeIcon icon={faLinkedinIn} size="xl"  /></a>
           </li>
           <li>
            <a href="/#"><FontAwesomeIcon icon={faTwitter} size="xl"  /></a>
            </li>
           <li>
            <a href="/#"><FontAwesomeIcon icon={faInstagram} size="xl"  /></a>
           </li>
        </ul>
    )
}

export default SocialMediaHandles;