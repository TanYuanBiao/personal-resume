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
          <p className="bio">Hello, I'm Tan, a dynamic and results-oriented Software Engineering graduate with a strong foundation in Computer Science from the University of Nottingham. I am passionate about creating impactful software solutions and leveraging emerging technologies to drive meaningful change.</p>

          <p className="bio">With extensive experience in Java, Python, C#, JavaScript, HTML, and CSS, I am skilled in both backend and frontend development, as well as areas such as Object-Oriented Programming and SQL. I have hands-on expertise with tools like Git, JavaFX, MVC, Android, Jira, MySQL, Maven, and Gradle, which equip me to develop and maintain high-quality applications in agile and DevOps-driven environments.</p>

          <p className="bio">I am a proactive learner, dedicated to continuous growth and skill development. My strengths in communication, teamwork, and problem-solving allow me to thrive in collaborative settings, and I am always open to tackling complex challenges that push my capabilities. If you’re looking for a dedicated software engineer with a commitment to excellence and a passion for technology, I’d love to connect and explore potential collaboration opportunities.</p>
          
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
              <li>Served as a key member of an agile scrum team, responsible for developing applications.</li>
              <li>Utilized Java/J2EE technologies to develop web applications for client-server environments, focusing on developing a new model for HSBC's Risk Foundation system.</li>
              <li>Ensured the functionality of Risk Foundation was accessible to teams in various locations such as India, Canada, and the UK, while implementing a comprehensive monitoring system to track service status in real-time and provide prompt support during service interruptions or errors, maximizing system availability.</li>
              <li>Consulted with user on project status and technical concerns, supported system testing, and identified over 70 upgrades and fixes.</li>
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
              <li>Optimized critical SQL queries using EXPLAIN PLAN, implementing indexing and query restructuring, resulting in 80% reduction in execution time and improved system performance.</li>
              <li>Implemented RabbitMQ to decouple critical data processing components, reducing peak load response times by 35% and increasing system throughput by 28%, while enhancing fault tolerance during high-traffic periods.</li>
              <li>Played a key role in modernizing a legacy JSP-based application to a React frontend with Spring Boot backend, implementing a RESTful API architecture. This full-stack overhaul reduced page load time by 50% and decreased server response time by 40%. achieved a 92% post-launch user satisfaction rate.</li>
            </ul>
          </div>

          <div className="project-entry">
            <div className="project-header">
              <h3 className="project-name">SQL Generator (Personal Project)</h3>
              <span className="period">Sep 2023 – May 2024</span>
            </div>
            <p className="project-description">
              This project is a tool that efficiently generates database schema definitions, mock data, and boilerplate code through a user-friendly visual interface. It was developed to automate repetitive tasks and accelerate the development lifecycle.
            </p>
            <ul className="project-details">
              <li>Utilized a front-end stack incorporating HTML, React, Ant Design, and UMI for the project, while leveraging Spring Boot and MySQL for the back-end architecture.</li>
              <li>Implemented a solution utilizing FreeMarker for template-based generation of SQL scripts, JSON payloads, and Java entity classes. Integrated the DataFaker framework to facilitate bulk generation of synthetic data, addressing the challenge of populating test environments with realistic datasets.</li>
            </ul>
          </div>
        </section>

        <section id="skills" ref={ref.skills}>
            <h2>Skills</h2>
            <div className="skills-content">
              <div className="skill-category">
                <h3>Software and tools</h3>
                <p>Eclipse, idea, VS Code, Linux, Jenkins, Git, Kubernetes, Docker, Postman</p>
              </div>
              
              <div className="skill-category">
                <h3>Databases</h3>
                <p>Oracle, MySQL, Redis, Mongo DB</p>
              </div>
              
              <div className="skill-category">
                <h3>Programming</h3>
                <p>Python, Java, JavaScript, Spring boot, JSP, SQL, HTML, XML, React</p>
              </div>
            </div>
          </section>
        
          <section id="interests" ref={ref.interests} >
            <h2>Interests</h2>
            <div className="interests-content">
              <p>Outside of my professional work in software development, I am passionate about:</p>
              <ul className="interests-list">
                <li>Tech Innovation: Following the latest developments in AI, cloud computing, and emerging technologies.</li>
                <li>Sports: Regularly playing basketball and badminton to maintain physical fitness and team spirit.</li>
                <li>Photography: Capturing moments and exploring urban landscapes through street photography.</li>
                <li>Reading: Enjoying both technical books on software architecture and science fiction novels.</li>
                <li>Travel: Exploring different cultures and gaining new perspectives through international travel.</li>
              </ul>
            </div>
          </section>
        
        
      </div>
    );
  });

export default Content;