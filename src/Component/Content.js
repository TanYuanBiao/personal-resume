import React from 'react';

// 使用 React.forwardRef 以便父组件传递 ref
const Content = React.forwardRef((props, ref) => {
    return (
      <div className="content">
        <section ref={ref.about} id="about" className="about-section">
        <div className="about-content">
          <h1 className="name">
            <span className="first-name">Yuanbiao </span>
            <span className="last-name">Tan</span>
          </h1>
          <div className="contact-info">
            <span>University of Nottingham · (+44) 7444454543 · </span>
            <a href="mailto:NAME@EMAIL.COM" className="email">yb_tan@outlook.com</a>
          </div>
          <p className="bio">
          I have 2 years experience as a java developer, mainly developing java web systems, and I am currently studying for a Masters in Computing (2 years) at the University of Nottingham. I plan to graduate in the summer of 2025.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yuanbiao-tan-5a2489282" className="social-icon linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/TanYuanBiao" className="social-icon github" aria-label="GitHub"><i className="fab fa-github"></i></a>

          </div>
        </div>
      </section>

        <section ref={ref.education} id="education" className="education-section">
          <h2>EDUCATION</h2>
          
          <div className="education-entry">
            <div className="education-header">
              <h3 className="institution">University of Nottingham</h3>
              <span className="period">September 2023 - June 2025</span>
            </div>
            <h4 className="degree">Master OF SCIENCE</h4>
            <p className="details">Computer Science </p>
            <p className="gpa">GPA: 71/100</p>
          </div>

          <div className="education-entry">
            <div className="education-header">
              <h3 className="institution">South China Institute of Software Engineering.GU</h3>
              <span className="period">September 2016 - June 2020</span>
            </div>
            <h4 className="degree">Bachelor OF SCIENCE</h4>
            <h4 className="degree">Software Engineering</h4>
            <p className="gpa">GPA: 85/100</p>
          </div>
        </section>
        
        <section ref={ref.experience} id="experience" className="experience-section">
          <h2>EXPERIENCE</h2>

          <div className="experience-entry">
            <div className="experience-header">
              <h3 className="position">Software Engineer</h3>
              <span className="period">Jun 2021 – Aug 2023</span>
            </div>
            <h4 className="company">Allegis Group (TEK system), china, Guangzhou</h4>
            <ul className="description">
              <li>Engaged with HSBC as an outsourcer for development work.</li>
              <li>Utilized Java/J2EE technologies to develop web applications for client-server environments, focusing on developing a new model for HSBC's Risk Foundation system.</li>
              <li>Ensured the functionality of Risk Foundation was accessible to teams in various locations such as India, Canada, and the UK.</li>
              <li>Conducted user requirements analysis to design and program applications, delivering support for system enhancements.</li>
              <li>Served as a key member of an agile scrum team, responsible for developing new applications using the Spring framework.</li>
              <li>Consulted with clients on project status and technical concerns, supported system testing, and identified over 70 upgrades and fixes.</li>
            </ul>
          </div>
        </section>
        
        <section ref={ref.projects} id="projects">
          <h2>PROJECTS</h2>
    
          <div className="project-entry">
            <div className="project-header">
              <h3 className="project-name">BCM project (HSBC)</h3>
              <span className="period">Jun 2021 – Aug 2023</span>
            </div>
            <p className="project-description">
              The project is responsible for linking and storing the data of upstream and downstream components.
            </p>
            <ul className="project-details">
              <li>Developed and deployed an online system utilizing Spring, JavaScript, and Oracle database.</li>
              <li>Developed RESTful APIs for managing search, insert, remove, and update operations on the Oracle database.</li>
              <li>Optimized modules with poor performance to enhance the running time of the program, such as SQL optimization, and implemented message queues to decouple the system and improve throughput.</li>
            </ul>
          </div>
        </section>

        <section ref={ref.skills} id="skills">
          <div className="skills-content">
            <h3>PROGRAMMING LANGUAGES & TOOLS</h3>
            <div className="skills-icons">
              {/* 这里应该放置相应的技能图标 */}
              <i className="devicon-html5-plain" title="HTML5"></i>
              <i className="devicon-css3-plain" title="CSS3"></i>
              <i className="devicon-javascript-plain" title="JavaScript"></i>
              <i className="devicon-angularjs-plain" title="Angular"></i>
              <i className="devicon-react-original" title="React"></i>
              <i className="devicon-nodejs-plain" title="Node.js"></i>
              <i className="devicon-sass-original" title="Sass"></i>
              <i className="devicon-less-plain-wordmark" title="Less"></i>
              <i className="devicon-wordpress-plain" title="WordPress"></i>
              <i className="devicon-gulp-plain" title="Gulp"></i>
              <i className="devicon-grunt-plain" title="Grunt"></i>
              <i className="devicon-npm-original-wordmark" title="npm"></i>
            </div>

            <h3>WORKFLOW</h3>
            <ul className="workflow-list">
              <li>Mobile-First, Responsive Design</li>
              <li>Cross Browser Testing & Debugging</li>
              <li>Cross Functional Teams</li>
              <li>Agile Development & Scrum</li>
            </ul>
          </div>
        </section>
        
        <section ref={ref.interests} id="interests">
          <h2>Interests</h2>
          <p>Details about interests...</p>
        </section>
        
        
      </div>
    );
  });

export default Content;