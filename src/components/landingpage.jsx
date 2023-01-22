import React from 'react';
import '../style/landingpg.css'
import Elementbg from '../Assets/Elementsvg.svg'

function background(){
    return(

        <div className='wrapper'>
            <div className='wrapper-inner'> 
            <div className='element'>
                 <br /> Hey this is aryan <br /> 

            </div>
            <img className='moving-image'
                src={Elementbg} />
            </div>
        </div>
        
    )
}   

export default background;