import "../styles/hero.css";
import Html from "../icons/html-icon.svg";
import Css from "../icons/css-icon.svg";
import Jscript from "../icons/js-icon.svg";
import ReactIcon from "../icons/react-icon.svg";
import SqlIcon from "../icons/sql-icon.svg";
import BootsIcon from "../icons/boots-icon.svg";
import GithIcon from "../icons/git-icon.svg";
import Perfil from "../images/hero-img-perfil.svg";
import Document from "../documents/Florencia_Costa_2024.pdf";
function Hero() {

    return(

       <section className="main-hero">
        <div className="container-hero">
        <div className="container-hero-img">
       <img src={Perfil} alt="florencia costa" className="hero-img desktop"/>
       <a href={Document} className="btn-cv-desktop" target="_blank">Mi CV</a>
       </div>
       <div className="container-hero-info">
        <div>
        <h1 className="hero-title">Hola, soy Florencia.</h1>
        <h2 className="hero-subtitle">Desarrolladora Frontend Jr.</h2>
        </div>
        <div className="container-habilities">

            <p className="title-habilities">Habilidades</p>
            <img src={Html} alt="html" className="hero-icon"/>
            <img src={Css} alt="css" className="hero-icon"/>
            <img src={Jscript} alt="javascript" className="hero-icon"/>
            <img src={ReactIcon} alt="react" className="hero-icon"/>
            <img src={SqlIcon} alt="sql" className="hero-icon"/>
            <img src={BootsIcon} alt="bootstrap" className="hero-icon"/>
            <img src={GithIcon} alt="git" className="hero-icon"/>
           
        </div>
        
       </div>
       <a href="" className="btn-cv">Mi CV</a>
       </div>
       </section>
    )

}

export default Hero;
