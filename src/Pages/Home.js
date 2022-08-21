import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Home({ route, onMouseDown }) {
    return (
        <Spline scene="https://prod.spline.design/CZ9FJkxZ6rqLQU2k/scene.splinecode"
            route={route} onMouseDown={onMouseDown} />
    );
}
