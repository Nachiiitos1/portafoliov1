import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#principal">Principal</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#sobremi">Sobre Mi</a></li>
        <li><a href="#socialmedia">Social Media</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
