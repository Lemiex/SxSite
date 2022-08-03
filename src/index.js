import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles.css';
import App from './App';
import MachineIntelligence from './Pages/MachineIntelligence';
import Experiences from './Pages/Experiences';
import Sustainability from './Pages/Sustainability';
import { Routes, Route, Link } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="machine" element={<MachineIntelligence />} />
          <Route path="experience" element={<Experiences />} />
          <Route path="sustainability" element={<Sustainability />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
