import Lead from '../Lead/Lead';
import Stack from '../Stack/Stack';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Lead />
      <Stack />
      <section id="projects" className="projects">
        <h2 className="projects__title section-title">My projects</h2>
        <ul className="projects__list">
          <li className="projects__item">
            <div className="projects__header">
              <h3 className="projects__item-title">News Explorer</h3>
              <p className="projects__item-subtitle">
                (JavaScript, React, Node.js/Express, MongoDB)
              </p>
            </div>
            <a
              href="https://news.catlogic.ru/"
              className="projects__image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet="./images/news_explorer.png 400w,
              ./images/news_explorer_hi.png 800w"
                sizes="400px"
                alt="News Explorer project"
                className="projects__image lazyload"
              />
            </a>
            <div className="projects__links">
              <a
                href="https://github.com/cat-street/news-explorer"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://news.catlogic.ru/"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </li>

          <li className="projects__item">
            <div className="projects__header">
              <h3 className="projects__item-title">Yandex Mesto</h3>
              <p className="projects__item-subtitle">
                (JavaScript, React, Node.js/Express, MongoDB)
              </p>
            </div>
            <a
              href="https://mesto.catlogic.ru/"
              className="projects__image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet="./images/project_mesto.png 400w,
              ./images/project_mesto_hi.png 800w"
                sizes="400px"
                alt="Yandex Mesto project"
                className="projects__image lazyload"
              />
            </a>
            <div className="projects__links">
              <a
                href="https://github.com/cat-street/react-mesto-api-full"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://mesto.catlogic.ru/"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </li>

          <li className="projects__item">
            <div className="projects__header">
              <h3 className="projects__item-title">CatLogic Calculator</h3>
              <p className="projects__item-subtitle">
                (React, JavaScript, HTML, CSS)
              </p>
            </div>
            <a
              href="http://cat-street.github.io/cl-002-calculator/"
              className="projects__image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet="./images/project_calculator.png 400w,
              ./images/project_calculator_hi.png 800w"
                sizes="400px"
                alt="CatLogic calculator"
                className="projects__image lazyload"
              />
            </a>
            <div className="projects__links">
              <a
                href="https://github.com/cat-street/cl-002-calculator"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="http://cat-street.github.io/cl-002-calculator/"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </li>

          <li className="projects__item">
            <div className="projects__header">
              <h3 className="projects__item-title">Random Quote Machine</h3>
              <p className="projects__item-subtitle">
                (HTML, SCSS, JavaScript, React, Redux, API)
              </p>
            </div>
            <a
              href="https://cat-street.github.io/random-quote-machine/"
              className="projects__image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet="./images/project_quotes.png 400w,
              ./images/project_quotes_hi.webp 800w"
                sizes="400px"
                alt="Random Quote Machine"
                className="projects__image lazyload"
              />
            </a>
            <div className="projects__links">
              <a
                href="https://github.com/cat-street/random-quote-machine"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://cat-street.github.io/random-quote-machine/"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </li>

          <li className="projects__item">
            <div className="projects__header">
              <h3 className="projects__item-title">Pomodoro Timer</h3>
              <p className="projects__item-subtitle">
                (JavaScript, React, HTML, CSS)
              </p>
            </div>
            <a
              href="https://cat-street.github.io/pomodoro-timer-react/"
              className="projects__image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet="./images/project_pomodoro.png 400w,
              ./images/project_pomodoro_hi.png 800w"
                sizes="400px"
                alt="Pomodoro Timer"
                className="projects__image lazyload"
              />
            </a>
            <div className="projects__links">
              <a
                href="https://github.com/cat-street/pomodoro-timer-react"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://cat-street.github.io/pomodoro-timer-react/"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </li>

          <li className="projects__item">
            <div className="projects__header">
              <h3 className="projects__item-title">CatLogic Clock</h3>
              <p className="projects__item-subtitle">(HTML, CSS, JavaScript)</p>
            </div>
            <a
              href="https://cat-street.github.io/catlogic-clock/"
              className="projects__image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet="./images/project_clock.png 400w,
              ./images/project_clock_hi.png 800w"
                sizes="400px"
                alt="CatLogic clock"
                className="projects__image lazyload"
              />
            </a>
            <div className="projects__links">
              <a
                href="https://github.com/cat-street/catlogic-clock"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://cat-street.github.io/catlogic-clock/"
                className="projects__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </li>
        </ul>
      </section>

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
