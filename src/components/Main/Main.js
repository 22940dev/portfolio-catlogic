import Lead from '../Lead/Lead';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Lead />
      <Stack />
      <Projects />

      <section id="contact" className="contact">
        <div className="contact__column">
          <h2 className="contact__title section-title">Contact me</h2>
          <form action="#" className="form">
            <div className="form__error-message">Message not sent!</div>
            <label className="form__windy-check">
              <input
                type="checkbox"
                id="windy_pearl_cracked_profit"
                name="windy_pearl_cracked_profit"
                value="1"
                tabIndex="-1"
                autoComplete="no"
              />{' '}
              Accept
            </label>
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form__input"
              placeholder="John Catsmith"
              minLength="2"
              maxLength="60"
              required
            />
            <label className="form__label" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form__input"
              placeholder="john@catsmith.com"
              minLength="2"
              maxLength="60"
              required
            />
            <label className="form__label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form__message form__input"
              name="message"
              id="message"
              placeholder="Hi, Andrey. The reason I'm writing..."
              required
            ></textarea>
            <button
              className="button button_type_submit"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="contact__column">
          <h2 className="contact__title section-title">Social</h2>
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
        </div>
      </section>
    </main>
  );
}

export default Main;
