import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
/*import BootsMag from "../icons/icon-boots-mag.svg";
import HtmlMag from "../icons/icon-html-mag.svg";
import JavasMag from "../icons/icon-js-mag.svg";
import CssMag from "../icons/icon-css-mag.svg";
import GitMag from "../icons/icon-git-mag.svg";
import NodeMag from "../icons/icon-node-mag.svg";*/
import Ecommerce from "./images/project-ecommerce.png";
import Booksop from "./images/project-bookshop.png";
import Portflio from "./images/project-portfolio.png";

function App() {

  const arrayInfo =[
    {
      "title": "E-commerce Jóvenes a Programar",
      "description": "Una plataforma de comercio electrónico desarrollada en el curso Jóvenes a Programar.",
      "githubLink": "https://github.com/usuario/ecommerce-jap",
      "liveLink": "https://usuario.github.io/ecommerce-jap"
    },
    {
      "title": "Tienda de libros Cyberbook",
      "description": "Una tienda en línea para comprar y vender libros, desarrollada con tecnologías modernas.",
      "githubLink": "https://github.com/usuario/cyberbook",
      "liveLink": "https://usuario.github.io/cyberbook"
    },
    {
      "title": "Portafolio responsive con Bootstrap",
      "description": "Un portafolio personal diseñado para ser completamente responsivo usando Bootstrap.",
      "githubLink": "https://github.com/usuario/portfolio-bootstrap",
      "liveLink": "https://usuario.github.io/portfolio-bootstrap"
    }
  ]
  console.log(arrayInfo[1].title)
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <section className="projects-section">
        <h3>Mis proyectos</h3>
      <Projects image={Ecommerce}
      title="E-commerce Jóvenes a Programar"
      description="Este es el proyecto final hecho para el curso de JAP"
      githubLink="holi"
      liveLink="holi"/>
      <Projects image={Booksop}
      title="Tienda de libros - Cyberbook"
      description="Este es el proyecto final hecho para el curso de JAP"
      githubLink="holi"
      liveLink="holi"/>
      <Projects image={Portflio}
      title="Portafolio responsive con Bootstrap"
      description="Este es el proyecto final hecho para el curso de JAP"
      githubLink="holi"
      liveLink="holi"/>
      
      </section>

     
      <Contact />
      <Footer />
    </>
      
  );
}

export default App;
