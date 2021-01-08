import './Social.css';

function Social() {
  return (
    <ul className="social">
      <li className="social__element">
        <a
          href="mailto:catlogic@ya.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="social__link"
          title="email"
        >
          <i className="social__icon far fa-envelope"></i>
          <p className="social__text">catlogic@ya.ru</p>
        </a>
      </li>
      <li className="social__element">
        <a
          href="https://twitter.com/cat__logic"
          target="_blank"
          rel="noopener noreferrer"
          className="social__link"
          title="twitter"
        >
          <i className="social__icon fab fa-twitter"></i>
          <p className="social__text">Twitter</p>
        </a>
      </li>
      <li className="social__element">
        <a
          href="https://github.com/cat-street"
          target="_blank"
          rel="noopener noreferrer"
          className="social__link"
          title="github"
        >
          <i className="social__icon fab fa-github"></i>
          <p className="social__text">GitHub</p>
        </a>
      </li>
      <li className="social__element">
        <a
          href="https://www.linkedin.com/in/cat-logic/"
          target="_blank"
          rel="noopener noreferrer"
          className="social__link"
          title="linkedin"
        >
          <i className="social__icon fab fa-linkedin"></i>
          <p className="social__text">LinkedIn</p>
        </a>
      </li>
      <li className="social__element">
        <a
          href="https://dev.to/cat__logic"
          target="_blank"
          rel="noopener noreferrer"
          className="social__link"
          title="dev.to"
        >
          <i className="social__icon fab fa-dev"></i>
          <p className="social__text">Dev.to</p>
        </a>
      </li>
      <li className="social__element">
        <a
          href="https://t.me/cat_logic"
          target="_blank"
          rel="noopener noreferrer"
          className="social__link"
          title="telegram"
        >
          <i className="social__icon fab fa-telegram-plane"></i>
          <p className="social__text">Telegram</p>
        </a>
      </li>
    </ul>
  );
}

export default Social;
