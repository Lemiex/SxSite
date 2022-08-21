import React from 'react'
import Spline from '@splinetool/react-spline';

const Sustainability = ({ route, onMouseDown }) => {
    return (
        <Spline scene="https://prod.spline.design/9g2RONVL5FFMxjXu/scene.splinecode"
            route={route} onMouseDown={onMouseDown} />
    );
}

export default Sustainability