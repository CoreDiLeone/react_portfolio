import "../styles/footer.css";
import GithubIcon from "../icons/icon-github.svg";
import LinkedIn from "../icons/linkedin-icon.svg";
import TopIcon from "../icons/top-icon.svg";
const Footer = () =>{

    return(

        <footer>
            <div>
             <a target="_blank" rel="noopener noreferrer"><img src={GithubIcon} alt="github" /></a>
             <a  target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="linkedin" /></a>
             </div>
             <a target="_blank" rel="noopener noreferrer"><img src={TopIcon} alt="top" /></a>
        </footer>
    )
}

export default Footer;