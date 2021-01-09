import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__button-container">
        <p className="navigation__button-title">Projects</p>
        <Link
          to="/projects"
          aria-label="projects"
          className="navigation__button navigation__button_position_first"
        >
          <span className="navigation__button-text">Projects</span>
        </Link>
      </li>
      <li className="navigation__button-container">
        <p className="navigation__button-title">Blog</p>
        <Link
          to="/blog"
          aria-label="blog"
          className="navigation__button"
        >
          <span className="navigation__button-text">Dev.to Blog</span>
        </Link>
      </li>
      <li className="navigation__button-container">
        <p className="navigation__button-title">Contact</p>
        <Link
          to="/contact"
          aria-label="contact"
          className="navigation__button navigation__button_position_last"
        >
          <span className="navigation__button-text">Contact</span>
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
