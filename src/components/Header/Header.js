import { Link } from 'react-router-dom';
import MainButton from '../MainButton/MainButton';
import TopLogo from '../TopLogo/TopLogo';
import Navigation from '../Navigation/Navigation';
import { LEARN_STRING, STACK } from '../constants/constants';
import ux from '../../images/ux.svg';
import './Header.css';

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__flare"></div>
      <Link to="/" className="header__logo">
        <TopLogo />
      </Link>
      <div className="header__studying-title">
        <span className="header__studying-accent">Currently</span> learning
      </div>
      <MainButton />
      <img src={ux} alt="UI/UX logo" className="header__ux-logo" />
      <div className="header__display">
        <span className="header__string">{ LEARN_STRING }</span>
      </div>
      <ul className="header__stack">
        {STACK.map((el, i) => (
          <li className="header__stack-item" key={i}>{el}</li>
        ))}
      </ul>
      <Navigation />
    </header>
  );
}

export default Header;
