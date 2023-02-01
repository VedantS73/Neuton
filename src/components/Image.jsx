import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function image() {
  return (
    <div>
        <ScrollAnimation animateIn="rotateIn" animateOnce={true}>
    <img style={{height : 60}} src="https://foton.qodeinteractive.com/wp-content/uploads/2019/12/screen-1.png" alt="image"/>
        </ScrollAnimation>
    </div>
  )
}

export default image


