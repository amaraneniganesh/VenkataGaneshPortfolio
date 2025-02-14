import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact Us', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">Ganesh</div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;