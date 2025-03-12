import PerfilImage from "../images/aboutme-img.svg";
import "../styles/aboutme.css";
function Aboutme({id}) {
  return (
    <section className="aboutme-section" id={id}>
    <div className="aboutme-container">
        <div className="aboutme-container-info">
      <h3 className="aboutme-title">Sobre mi</h3>
      <p className="aboutme-text">
        Egresada de Jóvenes a Programar 2023 con el diploma de Desarrollador Web
        y también bachiller en Ingeniería. <br /> <br />Cuento con más de un año de
        experiencia en desarrollo web y actualmente me encuentro cursando Jóvenes a Programar
        nivel 2. <br /> <br />Me defino como una persona responsable, perseverante, creativa
        y comprometida con los proyectos.
      </p>
      </div>
      <img src={PerfilImage} alt="" className="aboutme-img"/>
      </div>
    </section>
  );
}

export default Aboutme;
