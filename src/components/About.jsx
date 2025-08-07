const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Shahnawaz Alam, a passionate web developer with a knack for
          creating modern, responsive, and user-friendly websites. With
          expertise in frontend technologies and a love for clean design, I
          strive to deliver projects that blend functionality with aesthetics.
          Let's build something amazing together!
        </p>
        <div className="skills-list">
          <div className="skill-item">
            <span>HTML & CSS</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span>JavaScript</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span>React</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span>UI/UX Design</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "80%" }}></div>
            </div>
          </div>

           <div className="skill-item">
            <span>  Node.js</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "70%" }}></div>
            </div>
          </div>
           <div className="skill-item">
            <span>MongoDB</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "75%" }}></div>
            </div>
          </div>
           <div className="skill-item">
            <span>Python</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-img">
        <img src="/images/about2.png" alt="About Me" />
      </div>
    </section>
  );
};

export default About;
