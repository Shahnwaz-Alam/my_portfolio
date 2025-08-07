import Navbar from './components/Navbar';
import BarsAnimation from './components/BarsAnimation';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/portfolio.css';

function App() {
    return (
        <div>
            <Navbar />
            <BarsAnimation />
            <Home />
            <Services />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;