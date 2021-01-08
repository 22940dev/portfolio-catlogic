import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialElement.css';

function SocialElement({ name, icon, link }) {
  return (
    <li className="social__element">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        title={name}
      >
        <FontAwesomeIcon icon={icon} className="social__icon" />
        <p className="social__text">{name}</p>
      </a>
    </li>
  );
}

export default SocialElement;
