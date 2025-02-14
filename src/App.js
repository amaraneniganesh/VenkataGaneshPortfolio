import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts for dev tools
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="certificates">
        <Certificates />
      </Element>
      <Element name="contact">
        <ContactForm />
      </Element>
      <Footer />
    </div>
  );
}

export default App;