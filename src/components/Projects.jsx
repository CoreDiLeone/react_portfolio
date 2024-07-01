import "../styles/projects.css";
import Ecommerce from "../images/project-ecommerce.png";
import Booksop from "../images/project-bookshop.png";
import Portflio from "../images/project-portfolio.png";
import Github from "../icons/github.svg";
import Computer from "../icons/computer.svg";
import BootsMag from "../icons/icon-boots-mag.svg";
import HtmlMag from "../icons/icon-html-mag.svg";
import JavasMag from "../icons/icon-js-mag.svg";
import CssMag from "../icons/icon-css-mag.svg";
import GitMag from "../icons/icon-git-mag.svg";
import NodeMag from "../icons/icon-node-mag.svg";
function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="container-projects">
        <article>
          <h4>E-commerce Jóvenes a Programar</h4>
          <div className="project">
            <img src={Ecommerce} alt="Descripción del Proyecto 1" />

            <div className="link-icon">
              <a href="">
                <img src={Github} alt="github" />
              </a>
              <a href="">
                <img src={Computer} alt="computer" />
              </a>
            </div>
            <div className="project-info">
              <h3>E-commerce Jóvenes a Programar</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                dolorum vel sequi atque explicabo provident ut nesciunt adipisci
                ratione iure, nulla repudiandae hic fugit animi mollitia
                dignissimos rerum ex. Voluptas!
              </p>
              <div className="container-project-icons">
                <img src={HtmlMag} alt="" className="project-icon"/>
                <img src={CssMag} alt="" className="project-icon"/>
                <img src={JavasMag} alt="" className="project-icon"/>
                <img src={BootsMag} alt="" className="project-icon"/>
                <img src={GitMag} alt="" className="project-icon"/>
                <img src={NodeMag} alt="" className="project-icon"/>
              </div>
            </div>
          </div>
        </article>

        <article>
          <h4>Portfolio responsive con Bootstrap</h4>
          <div className="project project-middle">
            <img src={Portflio} alt="Descripción del Proyecto 3" />

            <div className="link-icon">
              <a href="">
                <img src={Github} alt="github" />
              </a>
              <a href="">
                <img src={Computer} alt="computer" />
              </a>
            </div>
            <div className="project-info">
              <h3>Portfolio responsive con Bootstrap</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cum
                animi quod beatae dolor nesciunt neque dolorum vero obcaecati
                sequi. Vero libero possimus nulla eius aut eos reiciendis
                eligendi. Eum.
              </p>
              <div className="container-project-icons">
                <img src={HtmlMag} alt="" className="project-icon"/>
                <img src={CssMag} alt="" className="project-icon"/>
                <img src={JavasMag} alt="" className="project-icon"/>
                <img src={BootsMag} alt="" className="project-icon"/>
                <img src={GitMag} alt="" className="project-icon"/>
                <img src={NodeMag} alt="" className="project-icon"/>
              </div>
            </div>
          </div>
        </article>

        <article>
          <h4>Book shop | Cyberbook</h4>
          <div className="project">
            <img src={Booksop} alt="Descripción del Proyecto 2" />

            <div className="link-icon">
              <a href="">
                <img src={Github} alt="github" />
              </a>
              <a href="">
                <img src={Computer} alt="computer" />
              </a>
            </div>
            <div className="project-info">
              <h3>Book shop | Cyberbook</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis debitis quae asperiores? Commodi deserunt quasi fuga
                velit similique a, sint dolorum repellendus esse eligendi
                molestias aut dignissimos provident explicabo qui.
              </p>
              <div className="container-project-icons">
                <img src={HtmlMag} alt="" className="project-icon"/>
                <img src={CssMag} alt="" className="project-icon"/>
                <img src={JavasMag} alt="" className="project-icon"/>
                <img src={BootsMag} alt="" className="project-icon"/>
                <img src={GitMag} alt="" className="project-icon"/>
                <img src={NodeMag} alt="" className="project-icon"/>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
