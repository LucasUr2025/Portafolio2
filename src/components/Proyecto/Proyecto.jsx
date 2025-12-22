import React from "react";
import "./Proyecto.css";

function Proyecto({ imagen, titulo, descripcion, codigo, demo }) {
  return (
    <div className="proyecto">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <div className="links">
        <a href={codigo} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
}

export default Proyecto;
