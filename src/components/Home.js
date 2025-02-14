import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import './Home.css';

const Home = () => {
  const resumeUrl = "https://amaraneniganesh.onrender.com/GANESHRESUME.pdf"; // Replace with your resume URL
  const handleGithubClick = () => {
    // Replace with your GitHub profile URL
    window.open('https://github.com/amaraneniganesh', '_blank');
  };

  return (
      <div>
    <section className="home-section">
      <div className="home-content">
        <div className="space-background">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="nebula"></div>
      </div>
        <motion.div
          className="profile-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-image">
            <img src="https://amaraneniganesh.onrender.com/LORD%20VENKANNA.png" alt="Profile" /> {/* Replace with your photo URL */}
          </div>
        </motion.div>
        
        <motion.div
          className="text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Hi, I'm <span>AMARANENI VENKATA SAI GANESH</span></h1>
          <h2>Web Developer & Designer</h2>
          <p>
          I am passionate about web development and enjoy creating modern web applications.
          I actively engage in solving Data Structures and Algorithms (DSA) problems and competitive coding challenges
          </p>
          
          <div className="cta-buttons">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn">
              <FileText size={20} />
              View Resume
            </a>
            <button onClick={handleGithubClick} className="github-btn">
              <Github className="icon" />
              GitHub Profile
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default Home;