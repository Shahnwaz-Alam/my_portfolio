const Home = () => {
  return (
    <section className="home">
      <div className="home-info">
        <h1>Shahnwaz Alam</h1>
        <h2>
          I'm a <span>Web Developer</span>
        </h2>
        <p>
          Hi, I'm Shahnawaz Alam, a passionate web developer with a knack for
          creating modern, responsive, and user-friendly websites. With
          expertise in frontend technologies and a love for clean design, I
          strive to deliver projects that blend functionality with aesthetics.
          Let's build something amazing together!
        </p>
        <div className="btn-sci">
          <a href="/cv%20shahnwaz%20full.pdf" download className="btn">
            Download CV
          </a>
          <div className="sci">
            <a href="https://github.com/Shahnwaz-Alam">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/shahnwaz-alam-353b1a264/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/sonu_snz02/">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src="/images/snz.png" alt="Shahnwaz Alam Profile Picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
