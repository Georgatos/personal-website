import React from 'react';
import './styles/global.css';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import CV from './pages/CV';
import ContactMe from './pages/ContactMe';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />

            <main className="flex-grow">
                <div id="landing-page"><LandingPage/></div>
                <div id="about-me"><AboutMe /></div>
                <div id="projects"><Projects /></div>
                <div id="cv"><CV /></div>
                <div id="contact"><ContactMe /></div>
            </main>

            <footer className="text-center py-4 text-gray-600">
                © {new Date().getFullYear()} Georgatos Andreas
            </footer>
        </div>
    );
}

export default App;