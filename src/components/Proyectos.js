import React from 'react';
import Navbar from './Navbar';

function Proyectos() {
  return (
    <div className="container">
      <Navbar/>
      <h1>Proyectos</h1>
      <div className="proyecto">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1.</p>
      </div>
    </div>
  );
}

export default Proyectos;
