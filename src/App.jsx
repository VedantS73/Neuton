import React from 'react';
import './style/landingpg.css';
import Background from './components/landingpage';
import Textcontent from './components/textcontent';
import MiddleContent from './components/middleContent';
// import elementbg from './Assets/Elementsvg.svg'


function App(){
    return(
       <div>
        <Background/>
        <Textcontent/>
        <MiddleContent/>
       </div>
    )
}

export default App;