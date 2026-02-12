export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with a love for creating intuitive and 
              performant web applications. With experience in both frontend and backend technologies,
              I enjoy the complete development process from design to deployment.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe in 
              continuous learning and staying updated with the latest industry trends.
            </p>
            <p>
              My goal is to build solutions that not only solve problems but also provide an 
              excellent user experience. I'm always eager to take on new challenges and collaborate 
              with talented teams to create something meaningful.
            </p>
          </div>
          <div className="about-info">
            <div className="info-card">
              <h3>Experience</h3>
              <p>3+ Years in Web Development</p>
            </div>
            <div className="info-card">
              <h3>Projects</h3>
              <p>20+ Completed Projects</p>
            </div>
            <div className="info-card">
              <h3>Clients</h3>
              <p>Worked with 15+ Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
