import React, { useState, useRef } from 'react';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    interests: useRef(null),
    projects: useRef(null),
  };

  const handleHover = (id) => {
    setActiveSection(id);
    const element = sectionRefs[id].current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container d-flex">
      <Sidebar onHover={handleHover} activeSection={activeSection} />
      <div className="content-container">
        <Content ref={sectionRefs} activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;