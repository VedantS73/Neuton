// import React, { useState, useEffect } from 'react';
// import React from 'react';
// import '../style/middlecontent.css'
// import { useScroll } from "framer-motion"
// function middleContent() {
//   return (
//     <div className="middlecontent">

//     <div className="big">
//         Centralized Apps
//     </div>
//     <div className="small">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//     </div>
//     </div>
//   )
// }

// export default middleContent;
import React from "react";
import Fade from "react-reveal/Fade";
import '../style/middlecontent.css'
class middleContent extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
          <div className="middlecontent">
            <div className="big">Centralized Apps</div>
            <div className="small">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>

          <div className="lowercontent">
            helloooo
          </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default middleContent;
