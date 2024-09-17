import React from 'react';
import Navbar from './Navbar'; // Asegúrate de importar el Navbar aquí
import './Home.css'; // Asegúrate de tener un archivo CSS separado para los estilos

function Home() {
  return (
    <div className="container">
      <Navbar /> {/* El Navbar debe estar aquí */}
      <div className="developer-text">
        <span className="tag">&lt;/&gt;</span><span className="developer">DEVELOPER</span>
      </div>
      <div className="content">
        <h1>NACHO PAVIA SALCEDO</h1>
        <p>Bienvenido a mi portafolio. Aquí encontrarás los proyectos que he ido desarrollando a lo largo de mi carrera.</p>
      </div>
      <div className="image-container"></div>
    </div>
  );
}

export default Home;
