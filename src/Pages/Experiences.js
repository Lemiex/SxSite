import React from 'react'
import Spline from '@splinetool/react-spline';

const Experiences = ({ route, onMouseDown }) => {

    return (
        <Spline scene="https://prod.spline.design/oB734oVA7ZpIVAar/scene.splinecode" route={route} onMouseDown={onMouseDown} />
    );
}

export default Experiences