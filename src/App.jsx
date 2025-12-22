import "./App.css";
import Proyecto from "./components/Proyecto/Proyecto.jsx";

function App() {
  return (
    <>
    <section id="inicio"></section>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
        </ul>
      </nav>
      <div className="presentacion">
        <img className="fotito" src="/photo.png" alt="Foto" />
        <h1>Lucas Urquiza</h1>
        <h1>Desarrollador Front-End</h1>
      </div>
      <div className="contacto">
        <p><i className="fa-solid fa-envelope"></i>urquilucas762@gmail.com</p>
        <a href="Currículum.pdf" target="_blank"><i className="fa-solid fa-file"></i></a>
        <a href="https://github.com/LucasUr2025" target="_blank"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/lucas-urquiza-urquiza-sandoval-3b6ba738b/?trk=li_LOL_SPIN_global_careers_jobsgtm_conv_acq_july2022_spinv1" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <p> <i className="fas fa-map-marker-alt"></i> Argentina, Buenos Aires </p>
      </div>
      <section id="sobre-mi"></section>
      <div className="linea"></div>
      <div className="sobre-mi">
        <h2>Sobre Mí</h2>
        <h3>
          Soy un desarrollador web frontend apasionado por crear sitios web
          limpios, responsivos y modernos. Con formación en HTML, CSS,
          JavaScript y React.
        </h3>
        <div className="linea"></div>
        <h2>Experiencia</h2>
        <div className="experiencia">
          <h3>Prácticas Formativas – Generación T</h3> 
          <h3>Desarrollador Web Trainee 240 horas de capacitación y práctica en desarrollo web.</h3>
          <h3>Participación en proyecto formativo avalado por la Municipalidad de San Miguel.</h3>
          <h3>2025</h3>
        </div>
      </div>
      <div className="linea"></div>
      <div className="tecnologias">
        <h3>Stack Tecnológico</h3>
        <div className="icons">
          <i className="devicon-html5-plain colored"></i>{" "}
          <i className="devicon-css3-plain colored"></i>{" "}
          <i className="devicon-javascript-plain colored"></i>{" "}
          <i className="devicon-react-original colored"></i>{" "}
        </div>
      </div>
      <div id="proyectos" className="proyectos">
        <h2>Proyectos</h2>
        <div className="lista-proyectos">
          <Proyecto
            imagen="calculator.png"
            titulo="Calculadora Simple"
            descripcion="Interfaz clara, intuitiva y moderna para realizar operaciones básicas: suma, resta, multiplicación, división, paréntesis y decimales."
            codigo="https://github.com/LucasUr2025/Calculadora-Simple.git"
            demo="https://lucasur2025.github.io/Calculadora-Simple/"
          />
        </div>
      </div>
      <div className="linea"></div>
    </>
  );
}

export default App;
