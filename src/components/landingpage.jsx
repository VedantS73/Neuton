import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../style/landingpg.css'
import Elementbg from '../Assets/Elementsvg.svg'
import { motion, useAnimation } from "framer-motion" 

const Background = () => {
    const animation = useAnimation();
    const [scrollY, setScrollY] = useState(0);
    const wrapperInnerRef = useRef(null);
  

    useEffect(() => {
        function handleScroll() {
            setScrollY(wrapperInnerRef.current.scrollTop);
        }
        wrapperInnerRef.current.addEventListener("scroll", handleScroll);
        return () => {
            wrapperInnerRef.current.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        console.log(scrollY , "WHY ");

        if (scrollY >= 100){
            animation.start({
                rotate:180,
                originY : 1.1
            });
        }
        else if (scrollY <= 100){
            animation.start({
                rotate:0,
                originY : 1.5
        });
    }
        
    }, [scrollY]);

    return (
        <div className='wrapper'>
            <div className='wrapper-inner' ref={wrapperInnerRef}> 
                <motion.img style={{  }} className='moving-image' animate={animation} transition={{x: {},default: { ease: "easeInOut" }}} src={Elementbg} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Background;
