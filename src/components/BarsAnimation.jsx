const BarsAnimation = () => {
    return (
        <div className="bars-animation">
            <div className="bar" style={{ '--i': 6 }}></div>
            <div className="bar" style={{ '--i': 5 }}></div>
            <div className="bar" style={{ '--i': 4 }}></div>
            <div className="bar" style={{ '--i': 3 }}></div>
            <div className="bar" style={{ '--i': 2 }}></div>
            <div className="bar" style={{ '--i': 1 }}></div>
        </div>
    );
};

export default BarsAnimation;