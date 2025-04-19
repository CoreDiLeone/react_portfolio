import "../styles/footer.css";
import GithubIcon from "../icons/icon-github.svg";
import LinkedIn from "../icons/linkedin-icon.svg";
import TopIcon from "../icons/top-icon.svg";
const Footer = () =>{

    return(

        <footer> 
            <div className="footer-container-icons">
             <a href="https://github.com/CoreDiLeone" target="_blank" rel="noopener noreferrer" className="footer-icon"><img src={GithubIcon} alt="github" /></a>
             <a href="https://www.linkedin.com/in/florenciacosta-fontend-developer-jr/" target="_blank" rel="noopener noreferrer" className="footer-icon"><img src={LinkedIn} alt="linkedin" /></a>
             </div>
             <div>
                <p className="footer-text">
                    Diseñado y desarrollado por Florencia Costa 2025.
                </p>
             </div>
             <a href="#hero" rel="noopener noreferrer" className="footer-icon"><img src={TopIcon} alt="top" /></a>
        </footer>
    )
}

export default Footer;