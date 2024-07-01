import "../styles/projects.css";
import Github from "../icons/github.svg";
import Computer from "../icons/computer.svg";

const Projects = ({image, title, description, githubLink, liveLink}) =>{

  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="overlay">
          <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer"><img src={Computer} alt="" /></a>
        </div>
      </div>
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Projects;
