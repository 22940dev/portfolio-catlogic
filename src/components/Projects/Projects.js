import { useEffect } from 'react';
import Project from '../Project/Project';
import { PROJECTS } from '../../constants/constants';
import './Projects.css';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">My projects</h2>
      <ul className="projects__list">
        {PROJECTS.map((el) => (
          <Project {...el} key={el.name} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
