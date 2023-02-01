import React from 'react';
import './style/landingpg.css';
import Background from './components/landingpage';
import Textcontent from './components/textcontent';
import MiddleContent from './components/middleContent';
import DownContent from './components/downContent';
import Phone from './components/Phone.jsx';
// import Image from './components/Image';
// import elementbg from './Assets/Elementsvg.svg'


function App(){
    return(
       <div>
        <Background/>
        <Textcontent/>
        <MiddleContent/>
        <DownContent/>
        <Phone/>
        </div>
        
    )
}

export default App;