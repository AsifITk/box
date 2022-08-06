import React, { useRef } from 'react'


function Box({ topx, leftx, rotatex }) {



    return (
        <div className='box' style={{ top: `${topx}%`, left: `${leftx}%`, transform: `rotate(${rotatex}deg)` }}></div>
    )
}

export default Box