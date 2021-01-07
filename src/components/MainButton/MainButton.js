import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './MainButton.css';

function MainButton() {
  const history = useHistory();

  return (
    <div className="main-button header__main-button">
        <p className="main-button__title">Main</p>
        <div className="main-button__inner">
          <button type="button" aria-label="home" onClick={() => history.push('/')}
            className="button main-button__button">
            <FontAwesomeIcon icon={ faPowerOff } className="main-button__symbol" />
          </button>
        </div>
      </div>
  );
}

export default MainButton;
