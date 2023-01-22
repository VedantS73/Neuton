import React from 'react';
import './style/landingpg.css';
import Background from './components/landingpage';
import Textcontent from './components/textcontent';
// import elementbg from './Assets/Elementsvg.svg'


function App(){
    return(
       <div>
        <Background/>
        <Textcontent/>
       </div>
    )
}

export default App;