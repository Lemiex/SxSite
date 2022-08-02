import Spline from '@splinetool/react-spline';
import Sustainability from './Pages/Sustainability';
import MachineIntelligence from './Pages/MachineIntelligence';
import Experiences from './Pages/Experiences';
import React, { useState, useRef } from 'react';

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

  if (route === 'home') {
    return (
      <Spline scene="https://prod.spline.design/CZ9FJkxZ6rqLQU2k/scene.splinecode"
        onLoad={onLoad}
        onMouseUp={onMouseUp} />
    )
  }
  else if (route === 'machine') {
    return (
      <MachineIntelligence route={route} />
    )
  }
  else if (route === 'sustainability') {
    return (
      <Sustainability />
    )
  }
  else if (route === 'experiences') {
    return (
      <Experiences />
    )
  }
  else if (route === 'projects') {
    <></>
  }

}
