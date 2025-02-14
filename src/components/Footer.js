import React from 'react';
import { Github, Linkedin, Mail,Instagram,Send   } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2024 Ganesh Amaraneni. All rights reserved.</p>
          {/* <p>Built with ❤️</p> */}
        </div>
        <div className="footer-social">
          <a href="https://github.com/amaraneniganesh" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/amaraneniganesh" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:2200030754cseh@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={20} />
          </a>
          <a href="https://www.instagram.com/ganesh__amaraneni/" target="_blank" rel="noopener noreferrer" >
            <Instagram size={20} />
          </a>
          <a href="https://t.me/ganesh_a_04" target="_blank" rel="noopener noreferrer">
            <Send  size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;