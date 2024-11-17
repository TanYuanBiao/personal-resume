import React from 'react';
import { Nav } from 'react-bootstrap';
import profileImage from '../phone_YBT.jpg';  // 导入图片

const Sidebar = ({ onHover }) => {
    return (
      <div className="sidebar">
        {/* Profile 图片部分 */}
        <div className="text-center">
          <img 
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
        </div>
        
        {/* 导航菜单部分 */}
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
            Projects
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