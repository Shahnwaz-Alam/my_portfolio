const Services = () => {
    return (
        <section id="services">
            <h2>Services</h2>
            <div className="services_container">
                <div className="service_item">
                    <div className="service_card">
                        <img src="/images/service1.png" alt="Web Development" />
                        <div className="service_content">
                            <h3>Web Development</h3>
                            <p>Building responsive and modern websites tailored to your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="service_item">
                    <div className="service_card">
                        <img src="/images/service2.png" alt="UI/UX Design" />
                        <div className="service_content">
                            <h3>UI/UX Design</h3>
                            <p>Crafting user-friendly and visually appealing interfaces.</p>
                        </div>
                    </div>
                </div>
                <div className="service_item">
                    <div className="service_card">
                        <img src="/images/service3.png" alt="Frontend Optimization" />
                        <div className="service_content">
                            <h3>Frontend Optimization</h3>
                            <p>Enhancing website performance and speed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;