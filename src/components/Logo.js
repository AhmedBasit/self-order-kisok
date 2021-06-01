import React from 'react'
import {useStyles} from '../styles' 
export default function Logo() {
    const styles=useStyles();
    return (
        <img src= "https://icon2.cleanpng.com/20171220/gze/twitter-logo-png-5a3a1851372e76.0876249315137567532269680.jpg" alt="Food order"
         className={styles.largeLogo}></img>
        )
}
