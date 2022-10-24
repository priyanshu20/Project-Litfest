import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {motion} from 'framer-motion';

import './litfest-title.styles.scss';


const LitFestTitle = () => {

    const [year, setYear] = useState(0);
    let time;
    let second = 50;
    useEffect(() => {
        if(year >= 19){
            second = second*2 + 600
        }
        else{
        second = year * 10 + second
        }
        time = setInterval(() => {
            if(year < 22)
            setYear(prev => prev + 1)
        }, second)
        return () => {clearInterval(time)}
    }, [year])

    return(
        <div className="litfest-title">
            <div className="heading">
                <span className="title">LitFest</span><span className="year">{year < 10 ? ` '0${year}` : ` '${year}`}</span>
            </div>
            <motion.div className = "tagline"
            animate = {{opacity : 1}} initial = {{opacity : 0}}
            transition = {{duration : 7, ease : "backInOut"}}
            >
                This is a tagline for litfest.
            </motion.div>
        </div>
    )
}

export default LitFestTitle;