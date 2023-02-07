import React from "react";
import Fade from "react-reveal/Fade";
import '../style/downContent.css'
class downContent extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
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
                
          <div className="downcontent">
            <div className="big">Protecting the Data</div>
          </div>

          <div className="down_content">
            <div className="big">hiding the Information</div>
          </div>
        </Fade>
      </div>
      
    );
 
  }
}

// const { useState, useEffect } = React;


// function App() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [height, setHeight] = useState(0)
  
//   useEffect(() => {   
//     window.addEventListener("scroll", listenToScroll);
//     return () => 
//        window.removeEventListener("scroll", listenToScroll); 
//   }, [])
  
//   const listenToScroll = () => {
//     let heightToHideFrom = 200;
//     const winScroll = document.body.scrollTop || 
//         document.documentElement.scrollTop;
//     setHeight(winScroll);

//     if (winScroll > heightToHideFrom) {  
//          isVisible && setIsVisible(false);
//     } else {
//          setIsVisible(true);
//     }  
//   };

//   return (
//    <div id="container">
//       <div id="height">
//         <b>height: {height} - {isVisible?"show":"hide"}</b> 
//       </div>
//      {
//         isVisible 
//          && 
//        <div id="hide">
//             Content hidden when scrolled beyond  200px
//        </div>
//       }
//    </div>
//   );
// }

export default downContent;