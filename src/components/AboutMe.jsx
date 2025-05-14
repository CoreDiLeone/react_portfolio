import PerfilImage from "../images/aboutme-img.svg";
import "../styles/aboutme.css";
function Aboutme({id}) {
  return (
    <section className="aboutme-section" id={id}>
    <div className="aboutme-container">
        <div className="aboutme-container-info">
      <h3 className="aboutme-title">Sobre mi</h3>
      <p className="aboutme-text">
        Egresada de Jóvenes a Programar 2023 con diploma en Desarrollo Web
        y también bachiller en Ingeniería. <br /> <br />Cuento con más de un año y medio de
        experiencia en diferentes tecnologías que se utilizan dentro del área Frontend pero
        también he tenido la oportunidad de trabajar con Node, MongoDB y Tailwind.  <br /> <br />Me defino como una persona responsable, perseverante, creativa y comprometida con los proyectos;
        con muchas ganas de aprender y crecer profesionalmente.
      </p>
      </div>
      <img src={PerfilImage} alt="" className="aboutme-img"/>
      </div>
    </section>
  );
}

export default Aboutme;
