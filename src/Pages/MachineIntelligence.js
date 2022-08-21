import React from 'react'
import Spline from '@splinetool/react-spline';

const MachineIntelligence = ({ route, onMouseDown }) => {

    return (
        <Spline scene="https://prod.spline.design/jpi11Nh8wnGc9BM2/scene.splinecode"
            route={route} onMouseDown={onMouseDown} />
    );
}

export default MachineIntelligence
