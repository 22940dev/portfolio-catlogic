import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__button-container">
        <p className="navigation__button-title">Projects</p>
        <button
          type="button"
          data-link="#projects"
          aria-label="projects"
          className="navigation__button navigation__button_position_first"
        ></button>
      </li>
      <li className="navigation__button-container">
        <p className="navigation__button-title">Blog (DEV.TO)</p>
        <a
          href="https://dev.to/cat__logic"
          target="_blank"
          rel="noopener noreferrer"
          data-link="#blog"
          aria-label="blog"
          className="navigation__button"
        >
          <span className="navigation__button-text">Dev.to Blog</span>
        </a>
      </li>
      <li className="navigation__button-container">
        <p className="navigation__button-title">Contact</p>
        <button
          type="button"
          data-link="#contact"
          aria-label="contact"
          className="navigation__button navigation__button_position_last"
        ></button>
      </li>
    </ul>
  );
}

export default Navigation;
