import catLogo from '../../images/catlogic-logo.svg';
import catLogoTitle from '../../images/front-end-logo.svg';
import './TopLogo.css';

function TopLogo() {
  return (
    <>
      <img
        src={catLogo}
        alt="CatLogic logo"
        className="logo logo_catlogic-header"
      />
      <img
        src={catLogoTitle}
        alt="JavaScript Developer logo"
        className="logo logo_front-end"
      />
    </>
  );
}

export default TopLogo;
