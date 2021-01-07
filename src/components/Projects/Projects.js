import Project from '../Project/Project';
import { PROJECTS } from '../../constants/constants';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">My projects</h2>
      <ul className="projects__list">
        {PROJECTS.map((el) => (
          <Project {...el} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
