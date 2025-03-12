import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import BootsMag from "./icons/icon-boots-mag.svg";
import HtmlMag from "./icons/icon-html-mag.svg";
import JavasMag from "./icons/icon-js-mag.svg";
import CssMag from "./icons/icon-css-mag.svg";
import GitMag from "./icons/icon-git-mag.svg";
import NodeMag from "./icons/icon-node-mag.svg";
import ReactMag from "./icons/icon-react-mag.svg";
import Ecommerce from "./images/project-ecommerce.png";
import Bookshop from "./images/project-bookshop.png";
import Portflio from "./images/project-portfolio.png";

function App() {

    const project1 = [HtmlMag, CssMag, JavasMag, BootsMag, GitMag, NodeMag ];
    const project2 = [HtmlMag, CssMag, JavasMag, BootsMag, GitMag, ReactMag];
    const project3 = [HtmlMag, CssMag, BootsMag];
  const arrayInfo =[
    {
      "title": "E-commerce Jóvenes a Programar",
      "description": "Una plataforma de comercio electrónico desarrollada en el curso Jóvenes a Programar.",
      "githubLink": "https://github.com/usuario/ecommerce-jap",
      "image": Ecommerce,
      "liveLink": "https://sdariogeo.github.io/e_mercado/index.html",
      "icons": project1
    },
    {
      "title": "Tienda de libros Cyberbook",
      "description": "Una tienda en línea para comprar y vender libros, desarrollada con tecnologías modernas.",
      "githubLink": "https://github.com/usuario/cyberbook",
      "image": Bookshop,
      "liveLink": "https://usuario.github.io/cyberbook",
      "icons": project2
    },
    {
      "title": "Portafolio responsive con Bootstrap",
      "description": "Un portafolio personal diseñado para ser completamente responsivo usando Bootstrap.",
      "githubLink": "https://github.com/CoreDiLeone/curso_Bootstrap_ProyectoFinal",
      "image": Portflio,
      "liveLink": "https://coredileone.github.io/curso_Bootstrap_ProyectoFinal/",
      "icons": project3
    }
  ]
  console.log(arrayInfo.map((item)=> item.title))
  return (
    <>
      <Navbar />
      
      <Hero id="hero"/>
      
      
      <Aboutme id="aboutme"/>
      
     
      <section className="projects-section" id="projects">
        <h3 className="project-main-title">Mis proyectos</h3>
        {arrayInfo.map((item, index) => (
          <Projects 
            key={index} 
            icons={item.icons}
            image={item.image} 
            title={item.title}
            description={item.description}
            githubLink={item.githubLink}
            liveLink={item.liveLink}
          />
        ))}
      
      </section>

     
     <Contact id="contact"/>
     
      
      <Footer />
    </>
      
  );

}

export default App;
