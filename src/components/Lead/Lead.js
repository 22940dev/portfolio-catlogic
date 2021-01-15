import { Link } from 'react-router-dom';
import bigCat from '../../images/big-cat.svg';
import './Lead.css';

function Lead() {
  return (
    <section className="lead">
      <img src={bigCat} alt="Big cat outline" className="lead__cat" />
      <div className="lead__description">
        <h1 className="lead__greeting">
          <strong>Hi, I'm Andrey</strong>
        </h1>
        <span className="lead__hr"></span>
        <p className="lead__text">
          Photographer, system&nbsp;administrator, technical&nbsp;editor, but,
          most importantly - <strong>a&nbsp;JavaScript&nbsp;developer</strong>{' '}
          based in Moscow,&nbsp;Russia.
        </p>
        <p className="lead__text">
          I can't fix your printer, but I'm the one you need for healing your
          website or app sick with dirty or unoptimized code. Be it a frontend
          or a backend, I can find solutions for all the previous bad decisions;
          moreover, we can start from scratch to build a beautiful and
          innovative system design.
        </p>
        <p className="lead__text">
          My trade is a modern <strong>JavaScript</strong>, in vanilla/framework
          form, I love doing magic with <strong>React</strong> components.
        </p>
        <p className="lead__text">
          I have no STEM background, but I'm really passionate about coding,
          learning, and getting the best results. I'm also a team person, I like
          helping teammates and gaining new knowledge from a group mind.
        </p>
        <p className="lead__text">
          I also love <strong>cats</strong>, and there's no helping it.
        </p>
        <p className="lead__text">
          I'm <strong>currently available</strong> for a starting-to-middle position!
        </p>
        <p className="lead__subtext">
          Check out{' '}
          <Link to="/projects" className="lead__link">
            my projects
          </Link>{' '}
          or&nbsp;
          <Link to="/contact" className="lead__link">
            contact&nbsp;me
          </Link>
          !
        </p>
      </div>
    </section>
  );
}

export default Lead;
