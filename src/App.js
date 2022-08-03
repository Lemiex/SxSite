import Spline from '@splinetool/react-spline';
import Sustainability from './Pages/Sustainability';
import MachineIntelligence from './Pages/MachineIntelligence';
import Experiences from './Pages/Experiences';
import React, { useState, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function App() {
    const [route, setRoute] = useState('home')

    const machinePuzzle = useRef();
    function onLoad(spline) {
        const objMachine = spline.findObjectById('bf62adaa-cccc-4765-bbf2-ea9291ee11be')
        machinePuzzle.current = objMachine;
    }

    function onMouseUp(e) {
        if (e.target.name === 'Shape 2') {
            setRoute('machine')
        }
        console.log(e.target)
    }

    return (
        <>
            <h1>SXSITE</h1>
            <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                <Link to="/machine">Machine</Link> |{' '}
                <Link to="/experience">Experiences</Link>
            </nav>
            <Outlet />

        </>
    )
}