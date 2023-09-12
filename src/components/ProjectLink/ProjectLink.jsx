import { Link } from 'react-router-dom'
import './ProjectLink.css'

const ProjectLink = ({ id, name, image }) => {
  return (
    <Link
      to={`/projects/${id}`}
      className='project-image'
    >
      <img
        src={image}
        alt={name}
      />
      <div className='project-title'>{name}</div>
    </Link>
  )
}

export default ProjectLink
