import { NavLink } from 'react-router-dom';
import './About.css'

const About = () => {
  return (
    <div className="section">
      <div className="about">
        <img
          src="src/assets/images/About.svg"
          alt="my learning path"
        />
        <div className="about-btns">
          <button className="download-btn">
            <a href="src/assets/Resume.pdf" download>
              Download resume <i className="fa fa-download"></i>
            </a>
          </button>
          <button className="goToProjects-btn">
            <NavLink to={"/projects"}>
              See my skills in action <i className="fa fa-arrow-right"></i>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About