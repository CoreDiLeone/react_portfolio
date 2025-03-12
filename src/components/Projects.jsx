import "../styles/projects.css";
import Github from "../icons/github.svg";
import Computer from "../icons/computer.svg";

const Projects = ({image, title, description, githubLink, liveLink, icons}) =>{

  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={Github} alt="" className="poject-github-icon"/></a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer"><img src={Computer} alt="" className="project-computer-icon"/></a>
        </div>
      </div>
      <div className="project-info">
        <div>
        <h2 className="project-info-title">{title}</h2>
        <p className="project-info-description">{description}</p>
        </div>
        <div className="container-project-icons">
        {icons.map((icon, index)=>(
          <img key={index} src={icon} className="project-icon"/>
        ))}
        </div>
        
      </div>
    </div>
  );
}

export default Projects;

/**/