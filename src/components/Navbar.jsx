import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

    return (
        <>
            <nav className="navbar" id="menubar">
                <a href="#" className="logo">portfolio.</a>
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="menu" onClick={toggleSidebar}>
                    <i className={`bx ${isSidebarActive ? 'bx-x' : 'bx-menu'}`}></i>
                </div>
            </nav>
            <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;