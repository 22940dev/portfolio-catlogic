import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { STACK } from '../../constants/constants';
import './Stack.css';

function Stack() {
  return (
    <section className="stack">
      <h2 className="stack__title">My skills</h2>
      <ul className="stack__list">
        {STACK.map((el) => (
          <li key={el.name} className="stack__element">
            <FontAwesomeIcon icon={el.icon} className="stack__icon" />
            <p className="stack__text">{el.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Stack;
