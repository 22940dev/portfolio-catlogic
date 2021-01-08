import catLogo from '../../images/catlogic-logo.svg';
import './Footer.css';

function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="footer">
      <p className="copyright">
        © 2020-{getYear()}
        <img src={catLogo} alt="CatLogic logo" className="footer__logo" />
      </p>
    </footer>
  );
}

export default Footer;
