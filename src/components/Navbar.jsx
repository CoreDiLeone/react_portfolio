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
            <a href="" className="nav-link">
              Inicio
            </a>
            <a href="" className="nav-link">
              Sobre mi
            </a>
            <a href="" className="nav-link">
              Proyectos
            </a>

            <button className="nav-link btn-navbar">¡Contáctame!</button>
          </div>
        </div>

        <div>
          <div className="container-links-desktop">
            <a href="" className="nav-link-desktop">
              Inicio
            </a>
            <a href="" className="nav-link-desktop">
              Sobre mi
            </a>
            <a href="" className="nav-link-desktop">
              Proyectos
            </a>

            <button className="btn-navbar">¡Contáctame!</button>
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
