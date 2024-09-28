import project1Image from '../assets/pr1.jpeg'; 
import project2Image from '../assets/pr2.jpeg';
import project3Image from '../assets/pr3.jpeg';


const projects = [
    { name: "Real Estate",
     image: project1Image,
     description: "A web application to browse and manage real estate properties.", 
     link: "/realestste/index.html" 
    },
    { name: "Pokemon Fetcher",
     image: project2Image,
     description: "An interactive app to fetch and display Pokémon information.", 
     link: "/pokemonlink/index.html"
     },
    { name: "Word Game",
     image: project3Image,
     description: "A fun word puzzle game.", 
     link: "/wordgame/index.html"  },
  ];

  const Projects = () => {
    return (
      <div>
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img className="project-image" src={project.image} alt={project.name} />
              <h4 className="project-name">{project.name}</h4>
              <p className="project-description">{project.description}</p>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project </a>
            </div>
          ))}
        </div> 
        </div>
    );
 };
    
export default Projects;