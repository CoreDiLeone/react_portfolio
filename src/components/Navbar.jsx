import { useState } from "react";
import "../styles/navbar.css";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import FlorIcon from "../icons/flor-icon.svg";

function Navbar() {
  const [btn, setBtn] = useState(false);
  const handlerBtn = () => {
    setBtn(!btn);
  };
  return (
    <header>
      <nav>
        <a href="">
          <img src={FlorIcon} alt="flor-icon" className="flor-icon" />
        </a>

        <div className={btn ? "container-links" : "container-links hidden"}>
          <div className="subcontainer-links">
            <a href="#hero" className="nav-link">
              Inicio
            </a>
            <a href="#aboutme" className="nav-link">
              Sobre mi
            </a>
            <a href="#projects" className="nav-link">
              Proyectos
            </a>

            <a href="#contact"className="nav-link btn-navbar">¡Contáctame!</a>
          </div>
        </div>

        <div>
          <div className="container-links-desktop">
            <a href="#hero" className="nav-link-desktop">
              Inicio
            </a>
            <a href="#aboutme" className="nav-link-desktop">
              Sobre mi
            </a>
            <a href="#projects" className="nav-link-desktop">
              Proyectos
            </a>

            <a href="#contact" className="btn-navbar">¡Contáctame!</a>
          </div>
        </div>

        {btn ? (
          <IoCloseOutline
            onClick={handlerBtn}
            className="btn-icon close-icon"
          />
        ) : (
          <RxHamburgerMenu onClick={handlerBtn} className="btn-icon" />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
