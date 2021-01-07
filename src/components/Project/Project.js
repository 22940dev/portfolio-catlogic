import './Project.css';

function Project({ name, stack, link, repo, img }) {
  return (
    <li className="projects__item">
      <div className="projects__header">
        <h3 className="projects__item-title">{name}</h3>
        <p className="projects__item-subtitle">{stack}</p>
      </div>
      <a
        href={link}
        className="projects__image-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          srcSet={`${
            require(`../../images/project_${img}.png`).default
          } 400w,
        ${require(`../../images/project_${img}_hi.png`).default} 800w`}
          sizes="400px"
          alt={`${name} project`}
          className="projects__image"
        />
      </a>
      <div className="projects__links">
        <a
          href={repo}
          className="projects__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
        <a
          href={link}
          className="projects__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </div>
    </li>
  );
}

export default Project;
