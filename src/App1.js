import Spline from '@splinetool/react-spline';
import Sustainability from './Pages/Sustainability';
import MachineIntelligence from './Pages/MachineIntelligence';
import Experiences from './Pages/Experiences';
import Home from './Pages/Home';
import Loading from './Loading'
import React, { useState, useRef, useEffect, Suspense } from 'react';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [route, setRoute] = useState('home')


    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 5000)
    }, [])

    // const machinePuzzle = useRef();
    // function onLoad(spline) {
    //     const objMachine = spline.findObjectById('bf62adaa-cccc-4765-bbf2-ea9291ee11be')
    //     machinePuzzle.current = objMachine;
    // }
    console.log(route)

    function onMouseDown(e) {
        if (e.target.name === 'Machine') {
            setRoute('machine')
        }
        else if (e.target.name === 'Sustainability') {
            setRoute('sustainability')
        }
        else if (e.target.name === 'Experiences') {
            setRoute('experiences')
        }
        else if (e.target.name === 'Projects') {
            setRoute('projects')
        }
    }
    return (
        <>
            {
                route === 'home' ?

                    <Spline scene="https://prod.spline.design/CZ9FJkxZ6rqLQU2k/scene.splinecode" onMouseDown={onMouseDown} />

                    : route === 'machine' ? <MachineIntelligence route={route} />
                        : route === 'sustainability' ? <Sustainability />
                            : route === 'experiences' ? <Experiences />
                                : null

            }
        </>
    )
}