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
import ReactMag from "./icons/icon-react-mag.svg";
import Portfolio from "./images/project-portfolio.png";
import Loopstudios from "./images/loopstudios.png";
import Simplecoffee from "./images/simplecoffee.png";

function App() {

    const project1 = [HtmlMag, CssMag, JavasMag, GitMag ];
    const project2 = [HtmlMag, GitMag, ReactMag, CssMag];
    const project3 = [HtmlMag, CssMag, BootsMag, GitMag];
  const arrayInfo =[
    {
      "title": " 👓 Loopstudios —  Frontend Challenge de la plataforma FrontendMentor.io",
      "description": "Una plataforma de tecnología VR. Se trata de un sitio web desarrollado con HTML, CSS, JavaScript y Git que ofrece una interfaz atractiva y totalmente adaptable a diferentes dispositivos gracias al uso de Flexbox y mediaqueries.",
      "githubLink": "https://github.com/CoreDiLeone/Loopstudios_landingPage",
      "image": Loopstudios,
      "liveLink": "https://coredileone.github.io/Loopstudios_landingPage/",
      "icons": project1
    },
    {
      "title": "☕ Coffee Listing App — Frontend Challenge de la plataforma DevChallenges.io",
      "description": "Aplicación desarrollada con React como parte de un reto de frontend. Utiliza useState y useEffect para gestionar el estado y efectos secundarios, consume una API externa para mostrar una lista de cafés y permite filtrar por disponibilidad.",
      "githubLink": "https://github.com/CoreDiLeone/simple_coffee_listing",
      "image": Simplecoffee,
      "liveLink": "https://coredileone.github.io/simple_coffee_listing/",
      "icons": project2
    },
    {
      "title": " 💼 Portafolio responsive con Bootstrap — Proyecto final de FreeCodeCamp",
      "description": "Se trata de un portafolio profesional completamente responsivo creado utilizando grilla y utilizades del Framework Bootstrap. El diseño está enfocado en ofrecer una interfaz limpia, profesional y adaptable a cualquier dispositivo.",
      "githubLink": "https://github.com/CoreDiLeone/curso_Bootstrap_ProyectoFinal",
      "image": Portfolio,
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
