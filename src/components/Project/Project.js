import 'lazysizes';
import './Project.css';

function Project({
  name, stack, link, repo, img, imgHi,
}) {
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
          srcSet={`${img} 400w, ${imgHi} 800w`}
          sizes="400px"
          alt={`${name} project`}
          className="projects__image lazyload"
        />
      </a>
      <div className="projects__links">
        {repo && (
          <a
          href={repo}
          className="projects__link"
          target="_blank"
          rel="noopener noreferrer"
          >
            Repo
          </a>
        )}
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
