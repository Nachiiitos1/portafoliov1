import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import SocialMedia from './components/SocialMedia';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('principal');

  useEffect(() => {
    // Escucha los cambios de hash en la URL para activar la animación
    const handleHashChange = () => {
      setActiveSection(window.location.hash.slice(1) || 'principal');
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      <div id="principal" className={`section ${activeSection === 'principal' ? 'zoom-container' : ''}`}>
        <Home />
      </div>
      <div id="proyectos" className={`section ${activeSection === 'proyectos' ? 'zoom-container' : ''}`}>
        <Proyectos />
      </div>
      <div id="sobremi" className={`section ${activeSection === 'sobremi' ? 'zoom-container' : ''}`}>
        <SobreMi />
      </div>
      <div id="socialmedia" className={`section ${activeSection === 'socialmedia' ? 'zoom-container' : ''}`}>
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
