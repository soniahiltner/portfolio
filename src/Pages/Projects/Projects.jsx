
import './Projects.css'
import { projects } from "/src/assets/bd.js"
import ProjectLink from '../../components/ProjectLink/ProjectLink';

const Projects = () => {

  const lastProjects = projects.filter(project => project.type === "last");
  
  const fccProjects = projects.filter(project => project.type === "fcc");
  
  
  return (
    <div className='projects-section'>
      <div className='projects'>
        <h2>My last projects</h2>
        <div className='projects-container last'>
          {lastProjects.map((project) => (
            <ProjectLink
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
        <h2>FreeCodeCamp Projects</h2>
        <div className='projects-container fcc'>
          {fccProjects.map((project) => (
            <ProjectLink
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
        <a
          className='fcc-link'
          href='https://www.freecodecamp.org/fcc8021d9ee-a905-4650-bda4-14371e852283'
          target='_blank'
          rel='noreferrer'
        >
          See more in my freeCodeCamp Curriculum{' '}
          <i className='fa fa-arrow-right'></i>
        </a>
      </div>
    </div>
  )
}

export default Projects