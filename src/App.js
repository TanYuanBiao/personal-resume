
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import './App.css';
import React, { useRef } from 'react';


function App() {
  // 创建 ref 对象，存储各个 section 的引用
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    interests: useRef(null),
    projects: useRef(null),
  };

  const handleHover = (id) => {
    // 使用 ref 对象而不是 document.getElementById
    const element = sectionRefs[id].current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container d-flex">
      <Sidebar onHover={handleHover} />
      <div className="content-container flex-grow-1">
        <Content ref={sectionRefs} />
      </div>
    </div>
  );
}
export default App;
