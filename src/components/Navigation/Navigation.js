import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__button-container">
        <p className="navigation__button-title">Projects</p>
        <HashLink
          smooth
          to="#projects"
          aria-label="projects"
          className="navigation__button navigation__button_position_first"
        >
          <span className="navigation__button-text">Projects</span>
        </HashLink>
      </li>
      <li className="navigation__button-container">
        <p className="navigation__button-title">Blog (DEV.TO)</p>
        <a
          href="https://dev.to/cat__logic"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="blog"
          className="navigation__button"
        >
          <span className="navigation__button-text">Dev.to Blog</span>
        </a>
      </li>
      <li className="navigation__button-container">
        <p className="navigation__button-title">Contact</p>
        <HashLink
          smooth
          to="#contact"
          aria-label="contact"
          className="navigation__button navigation__button_position_last"
        >
          <span className="navigation__button-text">Contact</span>
        </HashLink>
      </li>
    </ul>
  );
}

export default Navigation;
