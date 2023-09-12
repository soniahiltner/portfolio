import { Link, useParams } from 'react-router-dom'
import './Project.css'
import { projects } from '../../../public/assets/bd';

const Project = () => {

  const { id } = useParams();
  const projectId = parseInt(id);
  const project = projects.find(project => project.id === projectId)
  
  return (
    <div className='section-project'>
      <article className='project-container'>
        <div className='image-container'>
          <img
            src={project.image}
            alt={project.name}
          />
        </div>

        <div className='project-info'>
          <h3>{project.name}</h3>
          <p>{project.description1}</p>
          <p>{project.description2}</p>
          <aside className='portfolio-details'>
            <a
              href={project.link1}
              target='_blank'
              rel='noreferrer'
            >
              Source code
            </a>
            <a
              href={project.link2}
              target='_blank'
              rel='noreferrer'
            >
              Live site
            </a>
          </aside>
        </div>
      </article>
      <Link
        to={'/projects'}
        className='back'
      >
         <i className='fa fa-arrow-left'></i> Back to projects
      </Link>
    </div>
  )
}

export default Project