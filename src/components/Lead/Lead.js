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
          A photographer, a system&nbsp;administrator, a technical&nbsp;editor,
          but, most importantly -{' '}
          <strong>a&nbsp;JavaScript&nbsp;developer</strong> based in
          Moscow,&nbsp;Russia.
        </p>
        <p className="lead__text">
          I can not fix your printer, but I can analyze problems, find solutions,
          gentrify and optimize the code, turn your ideas into concepts, and
          turn concepts into working websites and applications.
        </p>
        <p className="lead__text">
          My trade is a modern <strong>JavaScript</strong>, in vanilla/framework
          form, I love doing magic with <strong>React</strong> components. I am
          focused on front-end, but also familiar with Node back-end.
        </p>
        <p className="lead__text">
          I have no STEM background, but I am extremely passionate about coding,
          learning, and getting the best results. I am also a team person, I like
          helping teammates and gaining new knowledge from a group mind.
        </p>
        <p className="lead__text">
          I also love <strong>cats</strong>, and there is no helping it.
        </p>
        <p className="lead__text">
          I am <strong>currently available</strong> for hire for a
          starting-to-middle position!
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
