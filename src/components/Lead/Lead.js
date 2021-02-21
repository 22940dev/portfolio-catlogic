import { Link } from 'react-router-dom';
import bigCat from '../../images/big-cat.svg';
import leadText from '../../constants/leadText';
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
        {leadText.map((el, i) => (
          <p key={i} className="lead__text" dangerouslySetInnerHTML={{ __html: el }} />
        ))}
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
