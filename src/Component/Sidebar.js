import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ onHover }) => {
    return (
      <div className="sidebar bg-primary text-white vh-100 p-3">
        <div className="text-center mb-4">
            <img 
            src="your-image-url" 
            alt="Profile" 
            className="rounded-circle" 
            width="80" 
            />
        </div>
        <Nav className="flex-column">
          <Nav.Link 
            href="#about" 
            className="text-white" 
            onMouseEnter={() => onHover('about')}
          >
            About
          </Nav.Link>
          <Nav.Link 
            href="#education" 
            className="text-white" 
            onMouseEnter={() => onHover('education')}
          >
            Education
          </Nav.Link>
          <Nav.Link 
            href="#experience" 
            className="text-white" 
            onMouseEnter={() => onHover('experience')}
          >
            Experience
          </Nav.Link>
          <Nav.Link 
            href="#projects" 
            className="text-white" 
            onMouseEnter={() => onHover('projects')}
          >
            projects
          </Nav.Link>
          <Nav.Link 
            href="#skills" 
            className="text-white" 
            onMouseEnter={() => onHover('skills')}
          >
            Skills
          </Nav.Link>
          <Nav.Link 
            href="#interests" 
            className="text-white" 
            onMouseEnter={() => onHover('interests')}
          >
            Interests
          </Nav.Link>
        </Nav>
      </div>
    );
  };

export default Sidebar;