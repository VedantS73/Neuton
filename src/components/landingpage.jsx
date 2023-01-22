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
        animation.start({
            rotate: scrollY,
        });
    }, [scrollY]);

    return (
        <div className='wrapper'>
            <div className='wrapper-inner' ref={wrapperInnerRef}> 
                <motion.img className='moving-image' animate={animation} src={Elementbg} />
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

                {/* Add more br tags as required */}
            </div>
        </div>
    )
}

export default Background;
