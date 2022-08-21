import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles.css';
import App from './App1';
import MachineIntelligence from './Pages/MachineIntelligence';
import Experiences from './Pages/Experiences';
import Sustainability from './Pages/Sustainability';
import { Routes, Route, Link } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="machine" element={<MachineIntelligence />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="sustainability" element={<Sustainability />} />
        </Route >
      </Routes>
    </BrowserRouter>
  </StrictMode>
);