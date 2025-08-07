const Projects = () => {
    const projectData = [
        { img: '/images/project1.png', title: 'Parallax Website', link: './parallax-website/index.html' },
        { img: '/images/project2.png', title: 'Landing Page', link: './landing-page/index.html' },
        { img: '/images/project3.png', title: 'Restaurant Website', link: './restaurant/index.html' },
        { img: '/images/project4.png', title: 'Music Website', link: './music-clone/index.html' },
        { img: '/images/project5.png', title: 'Recipe Search Web', link: 'https://shahnwaz-alam.github.io/my-project/' },
        { img: '/images/project6.png', title: 'Calculator', link: 'https://shahnwaz-alam.github.io/calculator/' },
        { img: '/images/project7.png', title: 'Tic Tac Toe Game', link: 'https://shahnwaz-alam.github.io/tic-tac-toe-game/' },
        { img: '/images/project8.png', title: 'Generate QR code', link: './documentation-page/index.html' },
        { img: '/images/project9.png', title: 'Testy Bites Resturant web', link: './documentation-page/index.html' },
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="container">
                <div className="project_container">
                    {projectData.map((project, index) => (
                        <div className="grid_item" key={index}>
                            <div className="card">
                                <img src={project.img} alt={`${project.title} Screenshot`} />
                                <a href={project.link}>
                                    <div className="card_content">
                                        <h3>{project.title}</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;