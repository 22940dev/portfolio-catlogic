import { Link } from 'react-router-dom';
import bigCat from '../../images/big-cat.svg';
import './Lead.css';

function Lead() {
  return (
    <section className="lead">
      <img src={bigCat} alt="Big cat outline" className="lead__cat" />
      <div className="lead__description">
        <h1 className="lead__greeting">
          <strong>Andrey&nbsp;Kudryavtsev</strong>
        </h1>
        <span className="lead__hr"></span>
        <p className="lead__text">
          <strong>A JavaScript developer</strong> from Moscow,&nbsp;Russia.
        </p>
        <p className="lead__text">
          A photojournalist by education (no STEM background), ex-system
          administrator, I started my journey to a web developer career in
          spring of 2020 by actively self-studying, applying to and finishing{' '}
          <em>Yandex Practicum</em> program, and consistently continuing to
          learn.
        </p>
        <p className="lead__text">
          I'm proficient in <strong>MERN stack</strong> and{' '}
          <strong>vanilla JavaScript</strong>, working with frontend and
          backend, writing clean code and following principles. Also have
          interest in UX/UI and web design.
        </p>
        <p className="lead__text">
          Looking for a starting-to-middle position as a React/JavaScript
          developer (no banks or government organizations).
        </p>
        <p className="lead__subtext">
          Check out{' '}
          <Link to="#projects" className="lead__link">
            my projects
          </Link>
          {' '}or&nbsp;
          <Link to="#contact" className="lead__link">
            contact&nbsp;me
          </Link>
          !
        </p>
      </div>
    </section>
  );
}

export default Lead;
