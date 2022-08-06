import React from 'react'

import Box from './Box'

function Container({ topx, leftx, rotatex }) {
    return (
        <div className='container'>
            <Box topx={topx} leftx={leftx} rotatex={rotatex} />
        </div>
    )
}

export default Container